from minigest.anagrafica.models import RelazioneAziendale

from django.contrib import admin


class UtenteRelazioneAziendaleInline(admin.StackedInline):
    model = RelazioneAziendale
    verbose_name = "Azienda"
    verbose_name = "Aziende"
    extra = 0
    fields = ("impresa",)


class ImpresaRelazioneAziendaleInline(admin.StackedInline):
    model = RelazioneAziendale
    verbose_name = "Utente"
    verbose_name = "Utenti"
    extra = 0
    fields = ("utente",)


@admin.register(RelazioneAziendale)
class RelazioneAziendaleAdmin(admin.ModelAdmin):
    fields = ("__all__",)

    ordering = (
        "impresa",
        "utente",
    )
    list_display = (
        "impresa",
        "utente",
    )
    search_fields = (
        "impresa",
        "utente",
    )
