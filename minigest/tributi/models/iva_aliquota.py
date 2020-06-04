from ..choices.iva import IVA_ORDINARIA, IVA_TIPOLOGIA_CHOICES
from ..managers import IvaAliquotaManager

from django.core.validators import MinValueValidator

from django.db import models


class IvaAliquota(models.Model):
    objects = IvaAliquotaManager()

    data = models.DateField(
        blank=False, help_text="la data dalla quale l'aliquota entra in vigore"
    )

    descrizione = models.CharField(
        blank=False, max_length=1, default=IVA_ORDINARIA, choices=IVA_TIPOLOGIA_CHOICES
    )

    aliquota = models.DecimalField(
        blank=False,
        null=False,
        default=0,
        max_digits=19,
        decimal_places=2,
        validators=[MinValueValidator(0.0)],
        help_text="l'ammontare dell'aliquota, per esempio 22",
    )

    def __str__(self):
        str_aliquota = "{0:.2f}".format(self.aliquota).replace(".", ",")

        return "IVA {descrizione} al {aliquota}% in vigore dal {data}".format(
            descrizione=self.get_descrizione_display(),
            aliquota=str_aliquota,
            data=self.data,
        )

    class Meta:
        verbose_name = "Aliquota IVA"
        verbose_name_plural = "Aliquote IVA"
        ordering = (
            "-data",
            "-aliquota",
        )
