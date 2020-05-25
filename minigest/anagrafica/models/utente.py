from ..managers import UtenteManager

from django.core.validators import MinLengthValidator

from django.contrib.auth.models import AbstractUser

from django.db import models


class Utente(AbstractUser):
    objects = UtenteManager()

    username = None
    first_name = None
    last_name = None

    email = models.EmailField(unique=True)

    nome = models.CharField(max_length=60, validators=[MinLengthValidator(1)])

    cognome = models.CharField(max_length=60, validators=[MinLengthValidator(1)])

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
