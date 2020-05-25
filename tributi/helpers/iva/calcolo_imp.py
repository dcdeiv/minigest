from decimal import Decimal


def calcolo_imponibile(totale, aliquota):
    totale = Decimal(totale)
    aliquota = Decimal(aliquota)

    imponibile = (totale * 100) / (100 + aliquota)

    return Decimal(round(imponibile, 2))


def calcolo_imposta(totale, aliquota):
    totale = Decimal(totale)
    aliquota = Decimal(aliquota)

    imposta = (totale * aliquota) / (100 + aliquota)

    return Decimal(round(imposta, 2))
