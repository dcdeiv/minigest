from django.contrib import admin

from ...models import DocFiscRiepilogoIva


class DocFiscRiepilogoIvaInline(admin.StackedInline):
    model = DocFiscRiepilogoIva
    extra = 0
    min_num = 1
    verbose_name = "Riepilogo Iva Documento Fiscale"
    verbose_name_plural = "Riepiloghi IVA Documento Fiscale"

    fieldsets = (
        (
            None,
            {
                "fields": (
                    ("reparto_iva", "esigibilita_iva",),
                    "natura",
                    "riferimento_normativo",
                    ("imponibile", "imposta",),
                    ("spese_accessorie", "arrotondamento",),
                )
            },
        ),
    )
