from .domicilio_fiscale import DomicilioFiscaleVS, DomicilioStabileOrgVS
from .fisco import InteressiLegaliVS, RegimeFiscaleVS, TurVS
from .impresa import ImpresaVS
from .negozi import NegozioVS, OrarioVarianteVS, OrarioVS
from .persona_fisica import PersonaFisicaVS
from .soggetto_fiscale import SoggettoFiscaleVS
from .tributi import IvaAliquotaVS
from .utente import UtenteVS

__all__ = [
    "NegozioVS",
    "OrarioVS",
    "OrarioVarianteVS",
    "IvaAliquotaVS",
    "DomicilioFiscaleVS",
    "DomicilioStabileOrgVS",
    "InteressiLegaliVS",
    "RegimeFiscaleVS",
    "TurVS",
    "ImpresaVS",
    "PersonaFisicaVS",
    "SoggettoFiscaleVS",
    "UtenteVS",
]
