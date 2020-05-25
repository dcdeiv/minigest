from ..models import IvaAliquota

from django.contrib import admin


@admin.register(IvaAliquota)
class IvaAliquotaAdmin(admin.ModelAdmin):
    list_display = ["data", "descrizione", "aliquota"]
    search_fields = ["data", "descrizione"]
    ordering = (
        "-data",
        "-aliquota",
    )
