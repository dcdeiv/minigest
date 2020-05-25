def iva_aliquote_queryset(documenti):
    documenti = documenti.all()
    iva_aliquote = list()

    for docfisc in documenti:
        aliquote = docfisc.iva_aliquote

        for aliquota in aliquote:
            if aliquota not in iva_aliquote:
                iva_aliquote.append(aliquota)

    return sorted(iva_aliquote, key=float)
