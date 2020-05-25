from decimal import Decimal

from ...helpers.chiusura import riepilogo_reparti
from ...managers.chiusura import ChiusuraManager

from django.core.validators import MinValueValidator

from django.db import models


class ChiusuraFiscale(models.Model):
    objects = ChiusuraManager()

    cassa = models.ForeignKey(
        to="negozi.Cassa",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="chiusure",
    )

    data = models.DateField(blank=False)

    totale_doc = models.PositiveIntegerField(
        default=1,
        blank=False,
        null=False,
        verbose_name="Totale documenti emessi",
        help_text="il numero totale dei documenti fiscali o scontrini emessi",
    )

    sconti = models.DecimalField(
        max_digits=19,
        decimal_places=2,
        default=0.00,
        validators=[MinValueValidator(0.0)],
    )

    @property
    def totale_lordo(self):
        reparti = self.reparti.all()
        totale = 0

        for reparto in reparti:
            totale += Decimal(reparto.totale_lordo)

        return Decimal(round(totale, 2))

    @property
    def non_riscosso(self):
        reparti = self.reparti.all()
        totale = 0

        for reparto in reparti:
            totale += Decimal(reparto.non_riscosso)

        return Decimal(round(totale, 2))

    @property
    def annulli(self):
        reparti = self.reparti.all()
        totale = 0

        for reparto in reparti:
            totale += Decimal(reparto.annulli)

        return Decimal(round(totale, 2))

    @property
    def resi(self):
        reparti = self.reparti.all()
        totale = 0

        for reparto in reparti:
            totale += Decimal(reparto.resi)

        return Decimal(round(totale, 2))

    @property
    def totale(self):
        reparti = self.reparti.all()
        totale = 0

        for reparto in reparti:
            totale += Decimal(reparto.totale)

        return Decimal(round(totale, 2))

    @property
    def imposta(self):
        reparti = self.reparti.all()
        totale = 0

        for reparto in reparti:
            totale += Decimal(reparto.imposta)

        return Decimal(round(totale, 2))

    @property
    def imponibile(self):
        reparti = self.reparti.all()
        totale = 0

        for reparto in reparti:
            totale += Decimal(reparto.imponibile)

        return Decimal(round(totale, 2))

    @property
    def dettagli(self):
        reparti = self.reparti.all()
        return riepilogo_reparti(reparti)

    def __str__(self):
        return "Chiusura fiscale del {0} totale {1} €".format(self.data, self.totale)

    class Meta:
        verbose_name_plural = "Chiusure fiscali"
