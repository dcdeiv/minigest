from django.contrib import admin

from ..models import TassoUfficialeRiferimento


@admin.register(TassoUfficialeRiferimento)
class TassoUfficialeRiferimentoAdmin(admin.ModelAdmin):
    ordering = ("-data",)
