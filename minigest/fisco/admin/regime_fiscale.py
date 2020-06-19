from ..models import RegimeFiscale

from django.contrib import admin


@admin.register(RegimeFiscale)
class RegimeFiscaleAdmin(admin.ModelAdmin):
    ordering = ("codice",)
