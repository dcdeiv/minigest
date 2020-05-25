from common.models.fields import UpperCaseField
from django.core.validators import RegexValidator
from django.db import models


class Cassa(models.Model):
    negozio = models.ForeignKey(
        to="negozi.Negozio",
        blank=False,
        null=False,
        on_delete=models.CASCADE,
        related_name="casse",
    )

    codice_cassa = UpperCaseField(
        blank=False,
        null=False,
        max_length=10,
        validators=[RegexValidator(regex="^[a-zA-Z0-9]+$")],
        help_text="""Un codice alfanumerico identificativo per il punto cassa.
            Esempio: GO1""",
        verbose_name="codice identificativo cassa",
    )

    id_registratore = models.CharField(
        blank=True,
        null=True,
        default=None,
        max_length=20,
        validators=[RegexValidator(regex="^[a-zA-Z0-9]+$")],
        help_text="il numero identificativo del registratore di cassa",
    )

    def __str__(self):
        return "{negozio}/{cassa}".format(
            negozio=self.negozio.codice_negozio, cassa=self.codice_cassa
        )

    class Meta:
        verbose_name = "Punto cassa"
        verbose_name_plural = "Punti cassa"
