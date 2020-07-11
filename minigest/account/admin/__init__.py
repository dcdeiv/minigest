from django.contrib import admin
from django.contrib.auth.models import Group

from .utente import UtenteAdmin

admin.site.unregister(Group)

__all__ = ["UtenteAdmin"]
