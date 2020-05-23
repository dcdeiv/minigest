from common.models.abstract import IndirizzoAbstract
from django.db import models


class DomicilioFiscale(IndirizzoAbstract):
    """
    L'indirizzo di fatturazione.
    Nella fattura elettronica questo indirizzo andrà a compilare il campo SEDE

    - sede: per le persone giuridiche (Aziende, ecc)
    - residenza: per le persone fisiche
    """

    soggetto = models.OneToOneField(
        "anagrafica.SoggettoFiscale",
        on_delete=models.CASCADE,
        related_name="domicilio_fiscale",
    )

    class Meta:
        verbose_name_plural = "Domicilio fiscale"
