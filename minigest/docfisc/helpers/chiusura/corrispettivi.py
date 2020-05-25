from pydash import flatten


def corrispettivi(self):
    chiusure = self.all()

    # crea una lista di date nel periodo selezionato
    date = chiusure.order_by("data").distinct("data")
    date = date.values_list("data")
    date = list(date)
    date = flatten(date)

    riepilogo = {
        "iva_aliquote": chiusure.iva_aliquote(),
        "corrispettivi": list(),
    }

    # aggrega i corrispettivi per data
    for data in date:
        data = data.strftime("%Y-%m-%d")
        cfs = chiusure.filter(data__icontains=data)

        corrispettivo = {
            "data": data,
            **cfs.riepilogo(),
            "reparti": cfs.riepilogo_reparti(),
        }

        riepilogo["corrispettivi"].append(corrispettivo)

    return riepilogo
