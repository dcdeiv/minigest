from django.db import models


class NegozioQuerySet(models.QuerySet):
    def casse(self):
        negozi = self.all().prefetch_related("casse")

        casse = negozi.none()

        for negozio in negozi:
            casse = casse | negozio.casse.all()

        return casse


class NegozioManager(models.Manager):
    def get_queryset(self):
        return NegozioQuerySet(self.model, using=self._db)

    def casse(self):
        return self.get_queryset().casse()
