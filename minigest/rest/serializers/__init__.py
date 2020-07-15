from .account.password import PasswordChangeSerializer
from .account.utente import UtenteSerializer
from .fisco.interessi_legali import InteressiLegaliSerializer
from .fisco.regime_fiscale import RegimeFiscaleSerializer
from .fisco.tur import TurSerializer

__all__ = [
    "UtenteSerializer",
    "PasswordChangeSerializer",
    "InteressiLegaliSerializer",
    "RegimeFiscaleSerializer",
    "TurSerializer",
]
