from decimal import Decimal

from .cassetto import CassettoContantiAbstract

from django.core.validators import MinValueValidator

from django.db import models


class Incasso(CassettoContantiAbstract):
    cassa = models.ForeignKey(
        to="negozi.Cassa",
        blank=False,
        null=False,
        on_delete=models.PROTECT,
        related_name="incassi",
    )

    timestamp = models.DateTimeField(auto_now_add=True)

    chiusura = models.DecimalField(
        blank=False,
        default=0,
        max_digits=19,
        decimal_places=2,
        validators=[MinValueValidator(0.0)],
        verbose_name="Chiusura Fiscale",
    )

    saldo_documenti_fiscali = models.DecimalField(
        blank=False,
        default=0,
        max_digits=19,
        decimal_places=2,
        verbose_name="Saldo dei Documenti Fiscali",
        help_text="Fatture - Note di Credito",
    )

    resi = models.DecimalField(
        blank=False,
        default=0,
        max_digits=19,
        decimal_places=2,
        validators=[MinValueValidator(0.0)],
        verbose_name="Totale dei Resi",
    )

    annulli = models.DecimalField(
        blank=False,
        default=0,
        max_digits=19,
        decimal_places=2,
        validators=[MinValueValidator(0.0)],
        verbose_name="Totale degli Annulli",
    )

    vpay = models.DecimalField(
        blank=False,
        default=0,
        max_digits=19,
        decimal_places=2,
        validators=[MinValueValidator(0.0)],
        verbose_name="Totale dei pagamenti virtuali",
    )

    @property
    def fondo_cassa(self):
        return Decimal(self.cassa.fondo_cassa.totale)

    @property
    def totale_corrispettivi(self):
        totale = (
            Decimal(self.chiusura)
            + Decimal(self.saldo_documenti_fiscali)
            - (Decimal(self.resi) + Decimal(self.annulli))
        )
        return round(totale, 2)

    @property
    def incasso(self):
        fondo_cassa = self.cassa.fondo_cassa.totale
        saldo = Decimal(self.totale_contanti) - Decimal(fondo_cassa)
        return round(saldo, 2)

    @property
    def saldo(self):
        totale = (
            Decimal(self.incasso)
            + Decimal(self.vpay)
            - Decimal(self.totale_corrispettivi)
        )
        return round(totale, 2)

    def __str__(self):
        return "{cassa}: € {totale} @ {timestamp}".format(
            cassa=self.cassa, timestamp=self.timestamp, totale=self.saldo
        )

    class Meta:
        verbose_name_plural = "incassi"
        ordering = ["-timestamp"]
