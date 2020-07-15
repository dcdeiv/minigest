from django.core.validators import MinValueValidator

from django.db import models


class InteressiLegali(models.Model):
    data = models.DateField(null=False, blank=False)

    percentuale = models.DecimalField(
        blank=False,
        null=False,
        max_digits=19,
        decimal_places=2,
        validators=[MinValueValidator(0.0)],
    )

    def __str__(self):
        return "Interessi legali al {0}% ({1})".format(self.percentuale, self.data)

    class Meta:
        verbose_name = "Interessi legali"
        verbose_name_plural = "Interessi legali"
        ordering = ("-data",)
