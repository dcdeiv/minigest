from decimal import Decimal


def fatturato(impresa, dal, al):
    # lista delle fatture
    documenti = impresa.docfisc_vendita.periodo(dal, al)

    # lista delle casse
    chiusure = impresa.negozi.all().casse().chiusure(dal, al)

    def calcola(obj, campo):
        return Decimal(getattr(obj, campo, 0))

    # inizializza il fatturato con il riepilogo delle fatture
    fatturato = {
        **documenti.riepilogo(),
        "dettagli": None,
    }

    # Aggiunge il riepilogo delle chiusure al fatturato
    fatturato["totale"] += chiusure.riepilogo()["totale"]
    fatturato["imposta"] += chiusure.riepilogo()["imposta"]
    fatturato["imponibile"] += chiusure.riepilogo()["imponibile"]
    fatturato["totale_doc"] += chiusure.riepilogo()["totale_doc"]

    # inizializza i dettagli dei reparti iva
    dettagli = documenti.riepilogo_reparti()

    # aggiunge il riepilogo dei reparti iva delle chiusure
    for riepilogo in chiusure.riepilogo_reparti():
        aliquota = riepilogo["iva_aliquota"]
        totale = riepilogo["totale"]
        imposta = riepilogo["imposta"]
        imponibile = riepilogo["imponibile"]

        if not any(d["iva_aliquota"] == aliquota for d in dettagli):
            dettagli.append(riepilogo)
        else:
            for idr, reparto in enumerate(dettagli):
                if reparto["iva_aliquota"] == aliquota:
                    dettagli[idr]["totale"] += totale
                    dettagli[idr]["imposta"] += imposta
                    dettagli[idr]["imponibile"] += imponibile
                    break

    # Aggiorna il fatturato
    fatturato["dettagli"] = dettagli

    # ritorna il fatturato
    return fatturato
