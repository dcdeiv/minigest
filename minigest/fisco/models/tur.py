from django.core.validators import MinValueValidator
from django.db import models


class TassoUfficialeRiferimento(models.Model):
    data = models.DateField(null=False, blank=False)

    percentuale = models.DecimalField(
        blank=False,
        null=False,
        max_digits=19,
        decimal_places=2,
        validators=[MinValueValidator(0.0)],
    )

    def __str__(self):
        return "T.U.R. al {0}% ({1})".format(self.percentuale, self.data)

    class Meta:
        verbose_name = "Tasso Ufficiale di Riferimento"
        verbose_name_plural = "Tassi ufficiali di Riferimento"
        ordering = ("-data",)
