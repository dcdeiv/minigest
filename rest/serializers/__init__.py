from .docfisc.chiusura import ChiusuraFiscaleSerializer
from .docfisc.chiusura_reparto import ChiusuraRepartoIvaSerializer
from .docfisc.codice_documento import DocFiscCodiceSerializer
from .docfisc.condizione_pagamento import DocFiscCondizionePagSerializer
from .docfisc.modalita_pagamento import DocFiscModPagSerializer
from .docfisc.natura_operazione import DocFiscNaturaOperazioneSerializer
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
    "ChiusuraFiscaleSerializer",
    "ChiusuraRepartoIvaSerializer",
    "DocFiscCodiceSerializer",
    "DocFiscCondizionePagSerializer",
    "DocFiscModPagSerializer",
    "DocFiscNaturaOperazioneSerializer",
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
