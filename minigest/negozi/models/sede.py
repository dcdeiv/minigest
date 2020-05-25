from django.db import models

from minigest.common.models.abstract import IndirizzoAbstract


class NegozioSede(IndirizzoAbstract):
    negozio = models.OneToOneField(
        to="negozi.Negozio",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="sede",
    )

    class Meta:
        verbose_name = "Indirizzo"
        verbose_name = "Indirizzo"
