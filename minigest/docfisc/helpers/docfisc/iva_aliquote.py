def iva_aliquote(self):
    riepiloghi = self.riepiloghi_iva.all()
    aliquote = list()

    for riepilogo in riepiloghi:
        aliquota = riepilogo.iva_aliquota

        if aliquota not in aliquote:
            aliquote.append(aliquota)

    # Ordina la lista
    return sorted(aliquote, key=float)
