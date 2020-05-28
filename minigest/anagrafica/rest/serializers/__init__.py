""" isort:skip_file """

from .domicilio import (
    DomicilioFiscaleSerializer,
    DomicilioStabileOrganizzazioneSerializer,
)
from .impresa import ImpresaSerializer
from .persona_fisica import PersonaFisicaSerializer
from .utente import UtenteSerializer
from .soggetto_fiscale import (
    SoggettoFiscaleSerializer,
    SoggettoFiscalePolymorphicSerializer,
)

__all__ = [
    "DomicilioFiscaleSerializer",
    "DomicilioStabileOrganizzazioneSerializer",
    "ImpresaSerializer",
    "PersonaFisicaSerializer",
    "UtenteSerializer",
    "SoggettoFiscaleSerializer",
    "SoggettoFiscalePolymorphicSerializer",
]
