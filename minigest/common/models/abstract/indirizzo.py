from django.core.validators import MinLengthValidator
from django.db import models

from ..fields import UpperCaseField


class IndirizzoAbstract(models.Model):
    indirizzo = models.CharField(
        blank=False, null=False, max_length=60, validators=[MinLengthValidator(1)]
    )

    numero_civico = models.CharField(blank=True, null=True, max_length=10)

    cap = models.CharField(
        blank=False,
        null=False,
        default="00000",
        max_length=5,
        validators=[MinLengthValidator(5)],
        help_text="per paesi extra EU inserire 00000",
    )

    comune = models.CharField(blank=False, null=False, max_length=60)

    provincia = UpperCaseField(
        blank=True,
        null=True,
        max_length=2,
        validators=[MinLengthValidator(2)],
        help_text="es: MI - da valorizzare solo se nazione è uguale a IT (Italia)",
    )

    nazione = UpperCaseField(
        blank=False,
        null=False,
        max_length=2,
        validators=[MinLengthValidator(2)],
        help_text="es: IT",
    )

    def __str__(self):
        civico = f", {self.numero_civico}" if self.numero_civico is not None else ""
        pcode = f"{self.cap} " if self.cap != "00000" else ""
        prov = f" ({self.provincia})" if self.provincia is not None else ""

        return f"{self.indirizzo}{civico}, {pcode}{self.comune}{prov} - {self.nazione}"

    class Meta:
        abstract = True
