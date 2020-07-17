from django.conf import settings

from minigest.common.models.fields import UpperCaseField
from .soggetto_fiscale import SoggettoFiscale

from django.core.validators import MinLengthValidator

from django.db import models


class PersonaFisica(SoggettoFiscale):
    """
    modello descrittivo della Persona Fisica
    """

    class Meta:
        verbose_name_plural = "Persone fisiche"

    utente = models.OneToOneField(
        null=True,
        to=settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name="dettagli_fiscali",
    )

    @property
    def residenza(self):
        return self.domicilio_fiscale or None

    def __str__(self):
        return f"{self.codice_fiscale} {self.nome} {self.cognome}"

