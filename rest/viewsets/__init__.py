from .docfisc.chiusura import ChiusuraFiscaleVS
from .docfisc.chiusura_reparto import ChiusuraRepartoIvaVS
from .domicilio_fiscale import DomicilioFiscaleVS, DomicilioStabileOrgVS
from .fisco import InteressiLegaliVS, RegimeFiscaleVS, TurVS
from .impresa import ImpresaVS
from .negozi.cassa import CassaVS
from .negozi.fondo_cassa import FondoCassaVS
from .negozi.incasso import IncassoVS
from .negozi.negozio import NegozioVS
from .negozi.orario import OrarioVarianteVS, OrarioVS
from .negozi.sede import NegozioSedeVS
from .persona_fisica import PersonaFisicaVS
from .soggetto_fiscale import SoggettoFiscaleVS
from .tributi import IvaAliquotaVS
from .utente import UtenteVS

__all__ = [
    "ChiusuraFiscaleVS",
    "ChiusuraRepartoIvaVS",
    "CassaVS",
    "FondoCassaVS",
    "IncassoVS",
    "NegozioVS",
    "OrarioVS",
    "OrarioVarianteVS",
    "NegozioSedeVS",
    "DomicilioFiscaleVS",
    "DomicilioStabileOrgVS",
    "InteressiLegaliVS",
    "RegimeFiscaleVS",
    "TurVS",
    "ImpresaVS",
    "PersonaFisicaVS",
    "SoggettoFiscaleVS",
    "IvaAliquotaVS",
    "UtenteVS",
]
