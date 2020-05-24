from django.contrib import admin

from ..models import IvaAliquota


@admin.register(IvaAliquota)
class IvaAliquotaAdmin(admin.ModelAdmin):
    list_display = ["data", "descrizione", "aliquota"]
    search_fields = ["data", "descrizione"]
    ordering = (
        "-data",
        "-aliquota",
    )
