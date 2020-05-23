from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from ..forms.utente import UtenteChangeForm, UtenteCreationForm
from ..models import Utente


@admin.register(Utente)
class UtenteAdmin(UserAdmin):
    add_form = UtenteCreationForm
    form = UtenteChangeForm
    search_fields = ("email",)
    ordering = ("email",)
    list_display = (
        "email",
        "is_staff",
        "is_active",
    )
    list_filter = (
        "email",
        "is_staff",
        "is_active",
    )

    fieldsets = (
        ("Autenticazione", {"fields": ("email", "password",)}),
        ("Anagrafica", {"fields": ("cognome", "nome",)}),
        ("Permessi", {"fields": ("is_staff", "is_active")}),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "titolo",
                    "nome",
                    "cognome",
                    "password1",
                    "password2",
                    "is_staff",
                    "is_active",
                ),
            },
        ),
    )
