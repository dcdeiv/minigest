""" isort:skip_file """

from django.contrib import admin

from ...models import (
    CodiceDocumentoFiscale,
    CondizionePagamento,
    ModalitaPagamento,
    NaturaOperazione,
)


@admin.register(
    CodiceDocumentoFiscale, ModalitaPagamento, CondizionePagamento, NaturaOperazione
)
class DocFiscCodiceAdmin(admin.ModelAdmin):
    ordering = ("codice",)
