from operator import itemgetter


def riepilogo_reparti(reparti):
    riepilogo = list()

    for reparto in reparti:
        riepilogo.append(
            {
                "iva_aliquota": reparto.iva_aliquota,
                "totale": reparto.totale,
                "imposta": reparto.imposta,
                "imponibile": reparto.imponibile,
                "totale_lordo": reparto.totale_lordo,
                "non_riscosso": reparto.non_riscosso,
                "annulli": reparto.annulli,
                "resi": reparto.resi,
            }
        )

    # ordina il riepilogo per aliquota iva
    riepilogo = sorted(riepilogo, key=itemgetter("iva_aliquota"))

    return riepilogo
