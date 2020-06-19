def iva_aliquote(self):
    # crea una lista di aliquote iva
    iva_aliquote = list()

    for chiusura in self.all():
        for d in chiusura.dettagli:
            aliquota = d["iva_aliquota"]

            if aliquota not in iva_aliquote:
                iva_aliquote.append(d["iva_aliquota"])

    # Ordina la lista
    return sorted(iva_aliquote, key=float)
