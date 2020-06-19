from decimal import Decimal

from django.template.defaulttags import register


@register.filter
def reparto(reparti, aliquota):
    trovato = filter(lambda reparto: reparto["iva_aliquota"] == aliquota, reparti)
    return list(trovato)


@register.filter
def dettagli_reparto(reparto, campo):
    if len(reparto) == 0:
        return Decimal(0.00)
    else:
        reparto = reparto[0]

        return reparto[campo]


@register.filter
def giorno(value):
    data = value.split("-")
    return data[-1]
