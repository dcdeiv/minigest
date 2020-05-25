from django.db import models

from minigest.common.models.abstract import IndirizzoAbstract


class DomicilioStabileOrganizzazione(IndirizzoAbstract):
    """
    L'indirizzo dello stabile organizzazione
    per tutte le imprese estere con una stabile organizzazione in Italia
    """

    soggetto = models.OneToOneField(
        to="anagrafica.SoggettoFiscale",
        on_delete=models.CASCADE,
        related_name="stabile_organizzazione",
    )

    class Meta:
        verbose_name_plural = "Stabile organizzazione"
