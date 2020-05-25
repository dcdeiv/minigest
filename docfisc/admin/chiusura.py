from django.contrib import admin

from ..models import ChiusuraFiscale, ChiusuraRepartoIva


class ChiusuraRepartoInline(admin.StackedInline):
    model = ChiusuraRepartoIva
    min_num = 1
    extra = 0
    verbose_name = "Reparto"
    verbose_name = "Reparti"

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "iva_reparto",
                    ("totale_lordo", "non_riscosso",),
                    ("annulli", "resi",),
                ),
            },
        ),
    )


@admin.register(ChiusuraFiscale)
class ChiusuraFiscaleAdmin(admin.ModelAdmin):
    inlines = [ChiusuraRepartoInline]

    list_display = (
        "cassa",
        "data",
        "totale_lordo",
        "non_riscosso",
        "annulli",
        "resi",
    )
    ordering = ("-data", "cassa")
    list_filter = ("data", "cassa")

    fieldsets = (
        (
            None,
            {"fields": (("cassa", "data",), ("totale_doc", "sconti",)),},  # noqa E231
        ),
    )
