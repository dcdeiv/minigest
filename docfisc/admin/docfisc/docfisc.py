from django.contrib import admin

from ...models import DocumentoFiscale
from .docfic_riepilogo_iva import DocFiscRiepilogoIvaInline
from .pagamento import DocFiscPagamentoInline
from .scadenza import DocFiscScadenzaInline


@admin.register(DocumentoFiscale)
class DocFiscAdmin(admin.ModelAdmin):
    inlines = [DocFiscRiepilogoIvaInline, DocFiscScadenzaInline, DocFiscPagamentoInline]

    ordering = ("-data",)
    list_filter = (
        "data",
        "cedente",
        "committente",
        "codice_documento",
    )
    list_display = (
        "data",
        "cedente",
        "codice_documento",
        "numero",
        "totale",
    )

    fieldsets = (
        ("Cedente e Committente", {"fields": (("cedente", "committente",),)}),
        (
            "Dettagli Generali",
            {
                "fields": (
                    ("data", "data_ricezione",),
                    "codice_documento",
                    ("numero", "totale",),
                    "condizioni_pagamento",
                )
            },
        ),
        ("Fattura elettronica", {"fields": ("xml",)}),
    )
