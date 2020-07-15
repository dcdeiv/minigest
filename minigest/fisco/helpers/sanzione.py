from decimal import Decimal

from common.helpers import strtodate


def sanzione(scadenza, pagamento, importo):
    scadenza = strtodate(scadenza)
    pagamento = strtodate(pagamento)
    importo = Decimal(importo)

    giorni = pagamento - scadenza
    giorni = giorni.days

    sanzione_ordinaria = Decimal(30.00)
    sanzione_ridotta = Decimal(15.00)

    if giorni <= 14:
        # ravvedimento sprint
        sanzione = giorni * 0.1

    elif giorni > 14 and giorni <= 30:
        # ravvedimento breve
        sanzione = sanzione_ridotta / 10

    elif giorni > 30 and giorni <= 90:
        # ravvedimento intermedio
        sanzione = sanzione_ridotta / 9

    elif giorni > 90 and giorni <= 365:
        # ravvedimento lungo
        sanzione = sanzione_ordinaria / 8

    elif giorni > 365 and giorni <= (365 * 2):
        # ravvedimento biennale
        sanzione = sanzione_ordinaria / 7

    else:
        # ravvedimento lunghissimo
        sanzione = sanzione_ordinaria / 6

    # crea una percentuale usufruibile
    sanzione = Decimal(sanzione)
    sanzione = round(sanzione, 2)
    sanzione = sanzione / 100

    # calcolo della mora
    mora = importo * sanzione
    mora = Decimal(mora)
    mora = round(mora, 2)

    return mora
