from django.core.validators import RegexValidator
from django.db import models
from minigest.common.models.fields import UpperCaseField

from ..helpers import oggi_aperto
from ..managers import NegozioManager


class Negozio(models.Model):
    objects = NegozioManager()

    impresa = models.ForeignKey(
        null=False,
        blank=False,
        to="anagrafica.Impresa",
        on_delete=models.PROTECT,
        related_name="negozi",
        verbose_name="impresa",
    )

    insegna = models.CharField(blank=False, null=False, max_length=80)

    codice_negozio = UpperCaseField(
        blank=False,
        null=False,
        max_length=64,
        unique=True,
        validators=[RegexValidator(regex="^[a-zA-Z0-9]+$")],
        help_text="""Il codice univoco del negozio, così come specificato da Google Buisiness
            È composto dal nome del brand più un numero. Es: GOOG1""",
    )

    def aperto(self, data=None):
        return oggi_aperto(self, data)

    def corrispettivi(self, dal=None, al=None):
        return self.casse.chiusure(dal, al).corrispettivi()

    def riepilogo(self, dal=None, al=None):
        return self.casse.chiusure(dal, al).riepilogo()

    def riepilogo_reparti(self, dal=None, al=None):
        return self.casse.chiusure(dal, al).riepilogo_reparti()

    def __str__(self):
        return "{negozio}".format(negozio=self.codice_negozio)

    class Meta:
        verbose_name_plural = "Negozi"
