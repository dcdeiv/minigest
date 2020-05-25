from django.contrib import admin

from ..models import InteressiLegali


@admin.register(InteressiLegali)
class InteressiLegaliAdmin(admin.ModelAdmin):
    ordering = ("-data",)
