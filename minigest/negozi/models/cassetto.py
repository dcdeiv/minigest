from decimal import Decimal

from django.db import models


class CassettoContantiAbstract(models.Model):
    eur_500 = models.PositiveIntegerField(
        blank=False, default=0, verbose_name="500,00 €",
    )
    eur_200 = models.PositiveIntegerField(
        blank=False, default=0, verbose_name="200,00 €"
    )
    eur_100 = models.PositiveIntegerField(
        blank=False, default=0, verbose_name="100,00 €"
    )
    eur_50 = models.PositiveIntegerField(blank=False, default=0, verbose_name="50,00 €")
    eur_20 = models.PositiveIntegerField(blank=False, default=0, verbose_name="20,00 €")
    eur_10 = models.PositiveIntegerField(blank=False, default=0, verbose_name="10,00 €")
    eur_5 = models.PositiveIntegerField(blank=False, default=0, verbose_name="5,00 €")
    eur_2 = models.PositiveIntegerField(blank=False, default=0, verbose_name="2,00 €")
    eur_1 = models.PositiveIntegerField(blank=False, default=0, verbose_name="1,00 €")
    eur_050 = models.PositiveIntegerField(blank=False, default=0, verbose_name="0,50 €")
    eur_020 = models.PositiveIntegerField(blank=False, default=0, verbose_name="0,20 €")
    eur_010 = models.PositiveIntegerField(blank=False, default=0, verbose_name="0,10 €")
    eur_005 = models.PositiveIntegerField(blank=False, default=0, verbose_name="0,05 €")
    eur_002 = models.PositiveIntegerField(blank=False, default=0, verbose_name="0,02 €")
    eur_001 = models.PositiveIntegerField(blank=False, default=0, verbose_name="0,01 €")

    @property
    def totale_contanti(self):
        totale = Decimal(
            (int(self.eur_500) * 500)
            + (int(self.eur_200) * 200)
            + (int(self.eur_100) * 100)
            + (int(self.eur_50) * 50)
            + (int(self.eur_20) * 20)
            + (int(self.eur_10) * 10)
            + (int(self.eur_5) * 5)
            + (int(self.eur_2) * 2)
            + (int(self.eur_1) * 1)
            + (int(self.eur_050) * 0.50)
            + (int(self.eur_020) * 0.20)
            + (int(self.eur_010) * 0.10)
            + (int(self.eur_005) * 0.05)
            + (int(self.eur_002) * 0.02)
            + (int(self.eur_001) * 0.01)
        )
        return round(totale, 2)

    class Meta:
        abstract = True
