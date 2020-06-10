from django.conf import settings

from django.db import models


class RelazioneAziendale(models.Model):
    utente = models.ForeignKey(
        to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="imprese",
    )

    impresa = models.ForeignKey(
        to="anagrafica.Impresa", on_delete=models.CASCADE, related_name="utenti",
    )

    class Meta:
        verbose_name_plural = "Relazioni Aziendali"
