from .anagrafica.domicilio_fiscale import DomicilioFiscaleSerializer
from .anagrafica.domicilio_stabile import DomicilioStabileOrgSerializer
from .dfchiusura.chiusura import ChiusuraFiscaleSerializer
from .dfchiusura.chiusura_reparto import ChiusuraRepartoIvaSerializer
from .docfisc.codice_documento import DocFiscCodiceSerializer
from .docfisc.condizione_pagamento import DocFiscCondizionePagSerializer
from .docfisc.docfisc import DocFiscSerializer
from .docfisc.modalita_pagamento import DocFiscModPagSerializer
from .docfisc.natura_operazione import DocFiscNaturaOperazioneSerializer
from .docfisc.pagamento import DocFiscPagamentoSerializer
from .docfisc.riepilogo_iva import DocFiscRiepilogoIvaSerializer
from .docfisc.scadenza import DocFiscScadenzaSerializer
from .fisco.interessi_legali import InteressiLegaliSerializer
from .fisco.regime_fiscale import RegimeFiscaleSerializer
from .fisco.tur import TurSerializer
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
    "DocFiscSerializer",
    "DocFiscCodiceSerializer",
    "DocFiscCondizionePagSerializer",
    "DocFiscModPagSerializer",
    "DocFiscNaturaOperazioneSerializer",
    "DocFiscRiepilogoIvaSerializer",
    "DocFiscPagamentoSerializer",
    "DocFiscScadenzaSerializer",
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
