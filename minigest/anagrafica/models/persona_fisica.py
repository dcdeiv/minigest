from django.conf import settings
from django.core.validators import MinLengthValidator
from django.db import models

from minigest.common.models.fields import UpperCaseField
from .soggetto_fiscale import SoggettoFiscale


class PersonaFisica(SoggettoFiscale):
    """
    modello descrittivo della Persona Fisica
    """

    utente = models.OneToOneField(
        null=True,
        to=settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name="dettagli_fiscali",
    )

    titolo = models.CharField(
        null=True,
        blank=True,
        max_length=10,
        validators=[MinLengthValidator(2)],
        help_text="titolo onorifico",
    )

    nome = models.CharField(null=False, max_length=60,)

    cognome = models.CharField(null=False, max_length=60,)

    codice_fiscale = UpperCaseField(
        null=False, blank=False, max_length=16, validators=[MinLengthValidator(11)],
    )

    @property
    def residenza(self):
        return self.domicilio_fiscale or None

    def __str__(self):
        return f"{self.codice_fiscale} {self.nome} {self.cognome}"

    class Meta:
        verbose_name_plural = "Persone fisiche"
