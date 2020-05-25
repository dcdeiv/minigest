from ...models import DocFiscPagamento

from django.contrib import admin


class DocFiscPagamentoInline(admin.StackedInline):
    model = DocFiscPagamento
    extra = 0
    verbose_name = "Pagamento"
    verbose_name_plural = "Pagamenti"

    fieldsets = (
        (
            None,
            {
                "fields": (("data", "modalita_pagamento"), "importo", "quietanza"),
            },  # noqa E231
        ),  # noqa E231
        (
            "Interessi e sanzioni",
            {
                "classes": ("collapse",),
                "fields": (("interessi", "sanzione",),),  # noqa E231
            },  # noqa E231
        ),
    )
