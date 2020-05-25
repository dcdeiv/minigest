from decimal import Decimal


def calcolo_imponibile(lordo, aliquota):
    base = Decimal(100)
    purged_aliquota = Decimal(aliquota)
    purged_lordo = Decimal(lordo)

    imponibile = (purged_lordo * base) / (base + purged_aliquota)

    return Decimal(imponibile)


def calcolo_imposta(lordo, aliquota):
    base = Decimal(100)
    purged_aliquota = Decimal(aliquota)
    purged_lordo = Decimal(lordo)

    imposta = (purged_lordo * aliquota) / (base + purged_aliquota)

    return Decimal(imposta)


def calcolo_totale(imponibile, aliquota):
    base = Decimal(100)
    purged_imponibile = Decimal(imponibile)
    purged_aliquota = Decimal(aliquota)

    totale = purged_imponibile * (purged_aliquota + base) / base

    return Decimal(totale)
