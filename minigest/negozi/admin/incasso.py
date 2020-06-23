from ..models import Incasso

from django.contrib import admin


@admin.register(Incasso)
class IncassoAdmin(admin.ModelAdmin):
    list_filter = ["timestamp"]
    ordering = ("-timestamp",)
    exclude = ("timestap",)
    search_fields = ["timestamp"]
    readonly_fields = ("fondo_cassa",)

    list_display = (
        "cassa",
        "fondo_cassa",
        "timestamp",
        "saldo",
    )

    fieldsets = (
        (None, {"fields": ("cassa",)}),
        (
            "Corrispettivi",
            {"fields": (("chiusura", "saldo_documenti_fiscali"), ("resi", "annulli",))},
        ),
        (
            "Monete, Contanti e Pagamenti elettronici",
            {
                "fields": (
                    "vpay",
                    ("eur_500", "eur_200", "eur_100"),
                    ("eur_50", "eur_20", "eur_10"),
                    ("eur_5", "eur_2", "eur_1"),
                    ("eur_050", "eur_020", "eur_010"),
                    ("eur_005", "eur_002", "eur_001"),
                )
            },
        ),
    )
