import itertools
from operator import itemgetter


def riepilogo_reparti(self):
    riepiloghi = self.riepiloghi_iva.all()
    reparti = list()

    for dettagli in riepiloghi:
        reparti.append(
            {
                "iva_aliquota": dettagli.iva_aliquota,
                "totale": dettagli.imposta + dettagli.imponibile,
                "imposta": dettagli.imposta,
                "imponibile": dettagli.imponibile,
            }
        )

    # ordina i reparti per aliquota iva
    reparti = sorted(reparti, key=itemgetter("iva_aliquota"))

    # somma i reparti nel caso in cui ce ne fossero
    # con la stessa aliquota
    reparti = itertools.groupby(reparti, key=itemgetter("iva_aliquota"))

    # aggrega i reparti per aliquota iva
    riepilogo = list()

    for aliquota, reparto, in reparti:
        dettagli = {
            "iva_aliquota": aliquota,
            "totale": 0,
            "imposta": 0,
            "imponibile": 0,
        }

        # somma i valori
        for v in reparto:
            dettagli["totale"] += v["totale"]
            dettagli["imposta"] += v["imposta"]
            dettagli["imponibile"] += v["imponibile"]

        # aggiunge il reparto alla lista dei reparti aggregati
        riepilogo.append(dettagli)

    return riepilogo
