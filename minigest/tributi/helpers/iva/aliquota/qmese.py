from datetime import date

from ....choices.iva import IVA_TIPOLOGIA_CHOICES


def qmese(self, mese=None):
    """ mese in formato YYYY-MM """
    mese = mese if mese is not None else date.today().strftime("%Y-%m")

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
            qaliquote = qreparto.filter(data__icontains=mese).order_by("data")

            # controlla se la queryset è vuota
            if len(qaliquote) == 0:
                # salva l'ultima
                giorno = f"{mese}-28"
                qaliquote = qreparto.filter(data__lte=giorno).order_by("-data")[:1]
            else:
                # se ce ne sono di più controlla se la prima aliquota
                # non sia maggiore del primo giorno del mese

                data_aliquota = qaliquote.first().data

                # crea un oggetto datetime.date
                # del primo giorno del mese
                mese = mese.split("-")
                primo_giorno = date(int(mese[0]), int(mese[1]), 1)

                if data_aliquota > primo_giorno:
                    # se è maggiore prende anche l'aliquota precedente
                    prev = qreparto.filter(data__lt=data_aliquota)
                    prev = prev.order_by("-data")[:1]

                    qaliquote = qaliquote | prev
                else:
                    qaliquote = qaliquote

            # unisce le aliquote
            aliquote = aliquote | qaliquote

    # ritorna la queryset
    return aliquote.order_by("-aliquota")
