from ..models import TassoUfficialeRiferimento

from django.contrib import admin


@admin.register(TassoUfficialeRiferimento)
class TassoUfficialeRiferimentoAdmin(admin.ModelAdmin):
    ordering = ("-data",)
