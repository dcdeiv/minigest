from ..models import Cassa, FondoCassa

from django.contrib import admin


class FondoCassaInline(admin.StackedInline):
    model = FondoCassa
    max_num = 1
    min_num = 1
    verbose_name = "Fondo cassa"
    verbose_name_plural = "Fondo cassa"

    fieldsets = (
        (
            None,
            {
                "fields": (
                    ("eur_500", "eur_200", "eur_100"),
                    ("eur_50", "eur_20", "eur_10"),
                    ("eur_5", "eur_2", "eur_1"),
                    ("eur_050", "eur_020", "eur_010"),
                    ("eur_005", "eur_002", "eur_001"),
                ),
            },
        ),
    )


class CassaAdminInline(admin.StackedInline):
    model = Cassa
    extra = 0
    verbose_name = "Punto cassa"
    verbose_name_plural = "Punti cassa"


@admin.register(Cassa)
class CassaAdmin(admin.ModelAdmin):
    inlines = [FondoCassaInline]

    verbose_name = "Punto cassa"
    verbose_name_plural = "Punti cassa"
    list_display = (
        "negozio",
        "codice_cassa",
        "fondo_cassa",
    )
    ordering = (
        "negozio",
        "codice_cassa",
    )
