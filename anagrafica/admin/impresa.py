from common.admin.fieldsets import FIELDSETS_INDIRIZZO
from django.contrib import admin

from ..models import DomicilioFiscale, DomicilioStabileOrganizzazione, Impresa


class SedeAdminInline(admin.StackedInline):
    model = DomicilioFiscale
    verbose_name = "Sede"
    verbose_name_plural = "Sede"

    extra = 0
    min_num = 1
    max_num = 1

    fieldsets = FIELDSETS_INDIRIZZO

    def has_delete_permission(self, request, obj=None):
        return False


class StabileOrganizzazioneAdminInline(admin.StackedInline):
    model = DomicilioStabileOrganizzazione
    verbose_name = "Indirizzo della stabile organizzazione"
    verbose_name_plural = "Indirizzo della stabile organizzazione"

    extra = 0
    max_num = 1

    fieldsets = FIELDSETS_INDIRIZZO


@admin.register(Impresa)
class ImpresaAdmin(admin.ModelAdmin):
    inlines = [SedeAdminInline, StabileOrganizzazioneAdminInline]

    ordering = (
        "denominazione",
        "id_fiscale_iva_paese",
        "id_fiscale_iva_codice",
        "codice_fiscale",
    )
    list_display = (
        "denominazione",
        "id_fiscale_iva_paese",
        "id_fiscale_iva_codice",
        "codice_fiscale",
    )
    list_filter = (
        "denominazione",
        "id_fiscale_iva_codice",
        "codice_fiscale",
    )
    search_fields = (
        "denominazione",
        "id_fiscale_iva_codice",
        "codice_fiscale",
    )

    fieldsets = (
        ("Anagrafica", {"fields": ("denominazione", "codice_eori",)}),
        (
            "Identificativi fiscali",
            {
                "fields": (
                    ("id_fiscale_iva_paese", "id_fiscale_iva_codice",),
                    "codice_fiscale",
                    "regime_fiscale",
                )
            },
        ),
        ("SDI", {"fields": ("codice_destinatario", "pec",)}),
        (
            "Albo professionale",
            {
                "classes": ("collapse",),
                "fields": (
                    "albo_professionale",
                    "albo_provincia",
                    "albo_numero_iscrizione",
                    "albo_data_iscrizione",
                ),
            },
        ),
        (
            "Iscrizione REA",
            {
                "classes": ("collapse",),
                "fields": (
                    "rea_ufficio",
                    "rea_numero",
                    "capitale_sociale",
                    "socio_unico",
                    "stato_liquidazione",
                ),
            },
        ),
        (
            "Rappresentante Fiscale",
            {"classes": ("collapse",), "fields": ("rappresentante_fiscale",)},
        ),
        ("Contatti", {"fields": ("email", ("telefono", "fax",),)}),
        (
            "Altro",
            {"classes": ("collapse",), "fields": ("riferimento_amministrazione",)},
        ),
    )
