""" isort:skip_file """

from .domicilio import (
    DomicilioFiscaleViewSet,
    DomicilioStabileOrganizzazioneViewSet,
)
from .impresa import ImpresaViewSet
from .persona_fisica import PersonaFisicaViewSet
from .soggetto_fiscale import SoggettoFiscaleViewSet
from .utente import UtenteViewSet

__all__ = [
    "DomicilioFiscaleViewSet",
    "DomicilioStabileOrganizzazioneViewSet",
    "ImpresaViewSet",
    "PersonaFisicaViewSet",
    "SoggettoFiscaleViewSet",
    "UtenteViewSet",
]
