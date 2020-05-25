from django.db import models

""" GIORNI DELLA SETTIMANA """
LUN, MAR, MER, GIO, VEN, SAB, DOM = range(7)
GIORNI_SETTIMANA_CHOICES = (
    (LUN, "Lunedì"),
    (MAR, "Martedì"),
    (MER, "Mercoledì"),
    (GIO, "Giovedì"),
    (VEN, "Venerdì"),
    (SAB, "Sabato"),
    (DOM, "Domenica"),
)


class Orario(models.Model):
    negozio = models.ForeignKey(
        to="negozi.Negozio",
        blank=False,
        null=False,
        related_name="orari",
        on_delete=models.PROTECT,
    )

    giorno = models.IntegerField(
        choices=GIORNI_SETTIMANA_CHOICES, blank=False, null=False
    )

    apertura = models.TimeField(blank=True, null=True, default=None)
    chiusura = models.TimeField(blank=True, null=True, default=None)

    def __str__(self):
        orari = "dalle {} alle {}".format(self.apertura, self.chiusura)
        chiuso_o_no = "chiuso" if self.apertura is None else orari
        return "{}: {} {}".format(
            self.negozio.codice_negozio, self.get_giorno_display(), chiuso_o_no
        )

    class Meta:
        verbose_name_plural = "Orari"


class OrarioVariante(models.Model):
    negozio = models.ForeignKey(
        "negozi.Negozio",
        blank=False,
        null=False,
        related_name="orari_varianti",
        on_delete=models.PROTECT,
    )

    dal = models.DateField(blank=False, null=False)
    al = models.DateField(blank=True, null=True, default=None)

    apertura = models.TimeField(blank=True, null=True, default=None)
    chiusura = models.TimeField(blank=True, null=True, default=None)

    motivo = models.CharField(
        blank=False, null=False, max_length=100, default="Festività"
    )

    def __str__(self):
        giorni = "dal {} al {}".format(self.dal, self.al)
        orari = "dalle {} alle {}".format(self.apertura, self.chiusura)
        chiuso_o_no = "chiuso" if self.apertura is None else orari

        return "{}: {} {}".format(
            self.negozio.codice_negozio,
            giorni if self.al is not None else "il {}".format(self.dal),
            chiuso_o_no,
        )

    class Meta:
        verbose_name = "Variante orario"
        verbose_name_plural = "Varianti orari"
