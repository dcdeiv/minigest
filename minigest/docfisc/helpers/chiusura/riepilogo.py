from decimal import Decimal


def riepilogo(self):
    chiusure = self.all()

    riepilogo = {
        "totale": 0,
        "imposta": 0,
        "imponibile": 0,
        "sconti": 0,
        "totale_lordo": 0,
        "non_riscosso": 0,
        "annulli": 0,
        "resi": 0,
        "totale_doc": 0,
    }

    for chiusura in chiusure:

        def calcola(campo):
            return Decimal(getattr(chiusura, campo, 0))

        riepilogo["totale_doc"] += chiusura.totale_doc
        riepilogo["totale"] += calcola("totale")
        riepilogo["imposta"] += calcola("imposta")
        riepilogo["sconti"] += calcola("sconti")
        riepilogo["totale_lordo"] += calcola("totale_lordo")
        riepilogo["non_riscosso"] += calcola("non_riscosso")
        riepilogo["annulli"] += calcola("annulli")
        riepilogo["resi"] += calcola("resi")

    return riepilogo
