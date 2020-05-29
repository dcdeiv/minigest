from .dfchiusura.chiusura import ChiusuraFiscaleVS
from .dfchiusura.chiusura_reparto import ChiusuraRepartoIvaVS
from .docfisc.codice_documento import DocFiscCodiceVS
from .docfisc.condizione_pagamento import DocFiscCondizionePagamentoVS
from .docfisc.dfacquisto import DocFiscAcquistoVS
from .docfisc.dfvendita import DocFiscVenditaVS
from .docfisc.modalita_pagamento import DocFiscModalitaPagamentoliVS
from .docfisc.natura_operazione import DocFiscNaturaOperazioneVS
from .docfisc.pagamento import DocFiscPagamentoVS
from .docfisc.riepilogo_iva import DocFiscRiepilogoIvaVS
from .docfisc.scadenza import DocFiscScadenzaVS
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
    "DocFiscVenditaVS",
    "DocFiscAcquistoVS",
    "DocFiscRiepilogoIvaVS",
    "DocFiscPagamentoVS",
    "DocFiscScadenzaVS",
    "ChiusuraFiscaleVS",
    "ChiusuraRepartoIvaVS",
    "DocFiscCodiceVS",
    "DocFiscCondizionePagamentoVS",
    "DocFiscModalitaPagamentoliVS",
    "DocFiscNaturaOperazioneVS",
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
