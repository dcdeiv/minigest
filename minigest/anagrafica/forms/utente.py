from ..models import Utente

from django.contrib.auth.forms import UserChangeForm, UserCreationForm


class UtenteCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = Utente
        fields = ("email",)


class UtenteChangeForm(UserChangeForm):
    class Meta:
        model = Utente
        fields = ("email",)
