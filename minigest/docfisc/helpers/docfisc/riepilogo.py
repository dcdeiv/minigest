from decimal import Decimal


def riepilogo(documenti):
    documenti = documenti.all()

    riepilogo = {
        "totale": 0,
        "imposta": 0,
        "imponibile": 0,
        "totale_doc": 0,
    }

    for chiusura in documenti:

        def calcola(campo):
            return Decimal(getattr(chiusura, campo, 0))

        riepilogo["totale"] += calcola("totale")
        riepilogo["imposta"] += calcola("imposta")
        riepilogo["imponibile"] += calcola("imponibile")
        riepilogo["totale_doc"] += documenti.count()

    return riepilogo
