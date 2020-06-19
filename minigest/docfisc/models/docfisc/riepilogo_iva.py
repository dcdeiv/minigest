from django.db import models


class DocFiscRiepilogoIva(models.Model):
    docfisc = models.ForeignKey(
        to="docfisc.DocumentoFiscale",
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name="riepiloghi_iva",
    )

    reparto_iva = models.ForeignKey(
        "tributi.IvaAliquota", blank=False, null=False, on_delete=models.PROTECT,
    )

    natura = models.ForeignKey(
        to="docfisc.NaturaOperazione",
        to_field="codice",
        null=True,
        blank=True,
        default=None,
        on_delete=models.SET_NULL,
        db_column="natura",
        help_text="""motivo per il quale non si è
            indicata l'aliquota iva (operazioni esenti)""",
    )

    spese_accessorie = models.DecimalField(
        null=True, blank=True, max_digits=19, decimal_places=2, default=None,
    )

    arrotondamento = models.DecimalField(
        null=True,
        blank=True,
        max_digits=19,
        decimal_places=2,
        default=None,
        help_text="eventuale arrotondamento dell'imponibile",
    )

    imponibile = models.DecimalField(
        null=False, blank=False, max_digits=19, decimal_places=2, default=0.00,
    )

    imposta = models.DecimalField(
        null=False, blank=False, max_digits=19, decimal_places=2, default=0.00,
    )

    esigibilita_iva = models.CharField(
        max_length=1,
        default="I",
        null=True,
        blank=True,
        choices=(
            ("I", "immediata",),
            ("D", "differita",),
            ("S", "scissione dei pagamenti",),
        ),
        help_text="esprime il momento nel quale l'IVA diventa esigibile",
    )

    riferimento_normativo = models.CharField(
        max_length=100,
        null=True,
        blank=True,
        help_text="Norma di riferimento nel caso in cui la natura si valorizzata",
    )

    @property
    def iva_aliquota(self):
        return self.reparto_iva.aliquota

    def __str__(self):
        return "{0} imponibile: {1} € - imposta: {2} €".format(
            self.docfisc, self.imponibile, self.imposta
        )

    class Meta:
        verbose_name = "Riepilogo IVA documento fiscale"
        verbose_name = "Riepiloghi IVA dei documenti fiscali"
