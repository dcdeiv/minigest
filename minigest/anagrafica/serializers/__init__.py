from .domicilio_fiscale import DomicilioFiscaleSerializer
from .domicilio_fiscale import ImpresaSedeSerializer
from .domicilio_stabile import DomicilioStabileOrgSerializer
from .domicilio_stabile import ImpresaStabileOrganizzazioneSerializer
from .impresa import ImpresaRelazioneSerializer
from .impresa import ImpresaSerializer
from .persona_fisica import PersonaFisicaSerializer
from .soggetto_fiscale import SoggettoFiscaleSerializer
from .soggetto_fiscale import SoggettoFiscalePolymorphicSerializer

__all__ = [
    "DomicilioFiscaleSerializer",
    "ImpresaSedeSerializer",
    "DomicilioStabileOrgSerializer",
    "ImpresaStabileOrganizzazioneSerializer",
    "ImpresaRelazioneSerializer",
    "PersonaFisicaSerializer",
    "SoggettoFiscaleSerializer",
    "SoggettoFiscalePolymorphicSerializer",
]
