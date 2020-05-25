from django.contrib import admin

from ..models import RegimeFiscale


@admin.register(RegimeFiscale)
class RegimeFiscaleAdmin(admin.ModelAdmin):
    ordering = ("codice",)
