from datetime import date

from ....choices.iva import IVA_TIPOLOGIA_CHOICES


def qanno(self, anno=None):
    """ anno in formato YYYY """
    anno = anno if anno is not None else date.today().strftime("%Y")

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
            qaliquote = qreparto.filter(data__icontains=anno).order_by("data")

            # controlla se la queryset è vuota
            if len(qaliquote) == 0:
                # salva l'ultima
                qaliquote = qreparto.filter(data__year__lte=anno).order_by("-data")[:1]
            else:
                # se ce ne sono di più controlla se la prima aliquota
                # non sia maggiore del primo giorno dell'anno

                data_aliquota = qaliquote.first().data

                # crea un oggetto datetime.date
                # del primo giorno dell'anno
                capodanno = date(int(anno), 1, 1)

                if data_aliquota > capodanno:
                    # se è maggiore prende anche l'aliquota precedente
                    prev = qreparto.filter(data__year__lt=anno).order_by("-data")[:1]
                    qaliquote = qaliquote | prev
                else:
                    qaliquote = qaliquote

            # unisce le aliquote
            aliquote = aliquote | qaliquote

    # ritorna la queryset
    return aliquote.order_by("-aliquota")
