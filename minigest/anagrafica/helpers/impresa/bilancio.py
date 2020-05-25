def bilancio(self, dal, al):
    fatturato = self.fatturato(dal, al)
    pagamenti = self.pagamenti(dal, al)

    docfisc = self.docfisc_vendita.ricevute().periodo(dal, al).riepilogo()

    e_totale = fatturato["imponibile"] or 0
    e_imposta = fatturato["imposta"] or 0

    u_totale = pagamenti.totale() or 0
    u_imposta = docfisc["imposta"] or 0

    b_totale = e_totale - u_totale
    b_imposta = e_imposta - u_imposta

    return {
        "entrate": {"totale": e_totale, "imposta": e_imposta},
        "uscite": {"totale": u_totale, "imposta": u_imposta},
        "bilancio": {"utile": b_totale, "imposta": b_imposta},
    }
