from minigest.common.admin.fieldsets import FIELDSETS_INDIRIZZO
from ..models import DomicilioFiscale, PersonaFisica

from django.contrib import admin


class ResidenzaAdminInline(admin.StackedInline):
    model = DomicilioFiscale
    verbose_name = "Residenza"
    verbose_name_plural = "Residenza"

    extra = 0
    min_num = 1
    max_num = 1

    fieldsets = FIELDSETS_INDIRIZZO

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(PersonaFisica)
class PersonaFisicaAdmin(admin.ModelAdmin):
    inlines = [ResidenzaAdminInline]

    ordering = ("codice_fiscale",)
    list_display = (
        "codice_fiscale",
        "cognome",
        "nome",
    )
    list_filter = ("codice_fiscale",)
    search_fields = (
        "codice_fiscale",
        "utente",
    )

    fieldsets = (
        (None, {"fields": ("utente",)}),
        ("Anagrafica", {"fields": ("titolo", ("cognome", "nome",), "codice_fiscale",)}),
        ("Contatti", {"fields": (("email", "telefono",),)}),
    )
