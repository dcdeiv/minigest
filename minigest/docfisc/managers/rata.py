from decimal import Decimal

from django.db import models


class RataManager(models.Manager):
    def totale(self):
        totale = Decimal(0)

        for rata in self.all():
            totale += Decimal(rata.importo)

        return Decimal(round(totale, 2))
