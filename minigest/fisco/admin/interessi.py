from ..models import InteressiLegali

from django.contrib import admin


@admin.register(InteressiLegali)
class InteressiLegaliAdmin(admin.ModelAdmin):
    ordering = ("-data",)
