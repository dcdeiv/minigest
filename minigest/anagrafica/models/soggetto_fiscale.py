from polymorphic.models import PolymorphicModel
from minigest.common.models.fields import UpperCaseField
from django.core.validators import MinLengthValidator
from django.db import models


class SoggettoFiscale(PolymorphicModel):
    """ SoggettoFiscale
        Il soggetto fiscale è quel soggetto a cui viene
        assegnato un identificativo fiscale
        che sia un codice fiscale
        o il codice della partita iva
        e a cui vengono destinati tutti i documenti commerciali

        Questo modello funge da modello parent per tutte le altre
        sotto categorie di soggetti fiscali
    """

    class Meta:
        verbose_name_plural = "soggetti fiscali"

    titolo = models.CharField(
        null=True,
        blank=True,
        max_length=10,
        validators=[MinLengthValidator(2)],
        help_text="titolo onorifico",
    )

    nome = models.CharField(null=True, blank=True, default=None, max_length=60,)

    cognome = models.CharField(null=True, blank=True, default=None, max_length=60,)

    codice_fiscale = UpperCaseField(
        null=False, blank=False, max_length=16, validators=[MinLengthValidator(11)],
    )

    codice_destinatario = UpperCaseField(
        blank=False,
        null=False,
        default="0000000",
        max_length=7,
        validators=[MinLengthValidator(6)],
    )

    email = models.EmailField(
        blank=True, null=True, max_length=256, validators=[MinLengthValidator(7)]
    )

    telefono = models.CharField(
        blank=True, null=True, max_length=12, validators=[MinLengthValidator(5)]
    )

    fax = models.CharField(
        blank=True, null=True, max_length=12, validators=[MinLengthValidator(5)]
    )

    rappresentante_fiscale = models.OneToOneField(
        to="self", on_delete=models.SET_NULL, null=True, blank=True, default=None,
    )
