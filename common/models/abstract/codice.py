from django.db import models

from ..fields import UpperCaseField


class CodiceAbstract(models.Model):
    codice = UpperCaseField(unique=True, blank=False, max_length=5)
    descrizione = models.CharField(blank=False, max_length=255)

    def __str__(self):
        return f"{self.codice} {self.descrizione}"

    class Meta:
        abstract = True
