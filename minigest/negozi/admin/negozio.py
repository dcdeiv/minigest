from django.contrib import admin
from minigest.common.admin.fieldsets import FIELDSETS_INDIRIZZO

from ..models import Negozio, NegozioSede, Orario, OrarioVariante
from .cassa import CassaAdminInline


class OrarioInline(admin.TabularInline):
    model = Orario
    max_num = 7
    extra = 0


class OrarioVarianteInline(admin.TabularInline):
    model = OrarioVariante
    extra = 0

    fieldsets = (
        (None, {"fields": ("dal", "al",)}),
        (None, {"fields": ("apertura", "chiusura",)}),
        (None, {"fields": ("motivo",)}),
    )


class NegozioSedeAdminInline(admin.StackedInline):
    model = NegozioSede
    max_num = 1
    min_num = 1
    verbose_name = "Sede"
    verbose_name_plural = "Sede"

    fieldsets = FIELDSETS_INDIRIZZO


class NegozioAdminInline(admin.StackedInline):
    model = Negozio
    extra = 0


@admin.register(Negozio)
class NegozioAdmin(admin.ModelAdmin):
    inlines = [
        NegozioSedeAdminInline,
        OrarioInline,
        OrarioVarianteInline,
        CassaAdminInline,
    ]

    list_display = ("impresa", "insegna", "codice_negozio", "sede")
    list_filter = (
        "impresa",
        "codice_negozio",
    )
    ordering = (
        "impresa",
        "codice_negozio",
    )
