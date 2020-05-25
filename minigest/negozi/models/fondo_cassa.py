from decimal import Decimal

from django.db import models

from .cassetto import CassettoContantiAbstract


class FondoCassa(CassettoContantiAbstract):
    cassa = models.OneToOneField(
        to="negozi.Cassa",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="fondo_cassa",
    )

    @property
    def totale(self):
        saldo = Decimal(self.totale_contanti)
        return round(saldo, 2)

    def __str__(self):
        return "{cassa} € {totale}".format(cassa=self.cassa, totale=self.totale)

    class Meta:
        verbose_name = "Fondo cassa"
        verbose_name_plural = "Fondo cassa"
