from .domicilio_fiscale import DomicilioFiscaleSerializer, DomicilioStabileOrgSerializer
from .fisco import InteressiLegaliSerializer, RegimeFiscaleSerializer, TurSerializer
from .impresa import ImpresaSerializer
from .negozi import NegozioSerializer, OrarioSerializer, OrarioVarianteSerializer
from .persona_fisica import PersonaFisicaSerializer
from .soggetto_fiscale import SoggettoFiscalePolymorphicSerializer
from .tributi import IvaAliquotaSerializer
from .utente import UtenteSerializer

__all__ = [
    "NegozioSerializer",
    "OrarioSerializer",
    "OrarioVarianteSerializer",
    "IvaAliquotaSerializer",
    "DomicilioFiscaleSerializer",
    "DomicilioStabileOrgSerializer",
    "InteressiLegaliSerializer",
    "RegimeFiscaleSerializer",
    "TurSerializer",
    "ImpresaSerializer",
    "PersonaFisicaSerializer",
    "SoggettoFiscalePolymorphicSerializer",
    "UtenteSerializer",
]
