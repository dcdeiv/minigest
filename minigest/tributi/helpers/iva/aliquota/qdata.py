from datetime import date

from ....choices.iva import IVA_TIPOLOGIA_CHOICES


def qdata(self, data=None):
    """ data in formato YYYY-MM-DD """

    data = data if data is not None else date.today()
    aliquote = self.none()

    for reparto in IVA_TIPOLOGIA_CHOICES:
        reparto = reparto[0]

        # ricerca le aliquote per reparto
        qreparto = self.filter(descrizione__iexact=reparto)

        if len(qreparto) == 1:
            # se c'è solo un'aliquota allora la salva immediatamente
            aliquote = aliquote | qreparto
        else:
            # Screma le aliquote se ce n'è' più di una
            # Controlla se nella data fornita ci sono aliquote
            qaliquote = qreparto.filter(data=data)

            # controlla se la queryset è vuota
            if len(qaliquote) == 0:
                # salva l'ultima
                qaliquote = qreparto.filter(data__lte=data).order_by("-data")[:1]

            # unisce le aliquote
            aliquote = aliquote | qaliquote

    # ritorna la queryset
    return aliquote.order_by("-aliquota")
