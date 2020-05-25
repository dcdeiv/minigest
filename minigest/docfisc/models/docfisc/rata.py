from ...managers import RataManager

from django.core.validators import MinValueValidator

from django.db import models


class RataAbstract(models.Model):
    data = models.DateField(null=False, blank=False)

    importo = models.DecimalField(
        null=False,
        blank=False,
        max_digits=19,
        decimal_places=2,
        default=0.00,
        validators=[MinValueValidator(0.0)],
    )

    modalita_pagamento = models.ForeignKey(
        to="docfisc.ModalitaPagamento",
        to_field="codice",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        db_column="modalita_pagamento",
    )

    objects = RataManager()

    class Meta:
        abstract = True
