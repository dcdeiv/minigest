from decimal import Decimal

from django.core.validators import MinValueValidator
from django.db import models
from tributi.choices.iva import IVA_ESENTE, IVA_ORDINARIA, IVA_TIPOLOGIA_CHOICES
from tributi.helpers.iva import calcolo_imponibile, calcolo_imposta
from tributi.models import IvaAliquota


class ChiusuraRepartoIva(models.Model):
    chiusura = models.ForeignKey(
        to="docfisc.ChiusuraFiscale",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="reparti",
    )

    iva_reparto = models.CharField(
        blank=False, max_length=1, default=IVA_ORDINARIA, choices=IVA_TIPOLOGIA_CHOICES
    )

    totale_lordo = models.DecimalField(
        blank=False,
        max_digits=19,
        decimal_places=2,
        default=0.00,
        validators=[MinValueValidator(0.0)],
    )

    non_riscosso = models.DecimalField(
        max_digits=19,
        decimal_places=2,
        default=0.00,
        validators=[MinValueValidator(0.0)],
    )

    annulli = models.DecimalField(
        max_digits=19,
        decimal_places=2,
        default=0.00,
        validators=[MinValueValidator(0.0)],
    )

    resi = models.DecimalField(
        max_digits=19,
        decimal_places=2,
        default=0.00,
        validators=[MinValueValidator(0.0)],
    )

    @property
    def iva_aliquota(self):
        if self.iva_reparto == IVA_ESENTE:
            aliquota = Decimal(0)
        else:
            data = self.chiusura.data
            aliquota = (
                IvaAliquota.objects.data(data)
                .get(descrizione__iexact=self.iva_reparto)
                .aliquota
            )
        return aliquota

    @property
    def totale(self):
        totale = Decimal(self.totale_lordo) - Decimal(self.annulli) - Decimal(self.resi)
        return Decimal(round(totale, 2))

    @property
    def imposta(self):
        if self.iva_reparto == IVA_ESENTE:
            imposta = 0
        else:
            imposta = calcolo_imposta(self.totale, self.iva_aliquota)
        return Decimal(round(imposta, 2))

    @property
    def imponibile(self):
        if self.iva_reparto == IVA_ESENTE:
            imponibile = self.totale
        else:
            imponibile = calcolo_imponibile(self.totale, self.iva_aliquota)
        return Decimal(round(imponibile, 2))

    def __str__(self):
        return "IVA {0} ({1} %) {2} €".format(
            self.get_iva_reparto_display(), self.iva_aliquota, self.totale
        )

    class Meta:
        verbose_name = "Reparto IVA chiusura fiscale"
        verbose_name_plural = "Reparti IVA chiusura fiscale"
