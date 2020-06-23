from decimal import Decimal

from common.helpers import daysinyear, strtodate
from fisco.models import InteressiLegali as i


def interessi_legali(scadenza, pagamento, importo):
    montante = Decimal(importo)
    scadenza = strtodate(scadenza)
    pagamento = strtodate(pagamento)
    interessi = i.objects.filter(data__year__range=(scadenza.year, pagamento.year))

    giorni = pagamento - scadenza
    giorni = giorni.days

    def calcolo(m, i, g):
        s = (m * i * g) / 36500
        return Decimal(round(s, 2))

    for a in range(scadenza.year, pagamento.year + 1):
        interesse = interessi.get(data__year__iexact=str(a)).percentuale
        cursor = daysinyear(a) if daysinyear(a) <= giorni else giorni
        montante += calcolo(montante, interesse, cursor)

    return montante - importo
