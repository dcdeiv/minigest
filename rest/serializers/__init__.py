from .domicilio_fiscale import DomicilioFiscaleSerializer, DomicilioStabileOrgSerializer
from .fisco import InteressiLegaliSerializer, RegimeFiscaleSerializer, TurSerializer
from .impresa import ImpresaSerializer
from .negozi.cassa import CassaSerializer
from .negozi.fondo_cassa import FondoCassaSerializer
from .negozi.incasso import IncassoSerializer
from .negozi.negozio import NegozioSerializer
from .negozi.orario import OrarioSerializer, OrarioVarianteSerializer
from .negozi.sede import NegozioSedeSerializer
from .persona_fisica import PersonaFisicaSerializer
from .soggetto_fiscale import SoggettoFiscalePolymorphicSerializer
from .tributi import IvaAliquotaSerializer
from .utente import UtenteSerializer

__all__ = [
    "NegozioSerializer",
    "FondoCassaSerializer",
    "IncassoSerializer",
    "OrarioSerializer",
    "OrarioVarianteSerializer",
    "NegozioSedeSerializer",
    "CassaSerializer",
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
