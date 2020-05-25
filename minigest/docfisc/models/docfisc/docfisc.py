from decimal import Decimal

from minigest.storage import CustomStorage
from ...helpers.docfisc import dir_docfisc_xml, iva_aliquote, riepilogo_reparti
from ...managers import DocFiscManager

from django.core.validators import MinValueValidator

from django.db import models


class DocumentoFiscale(models.Model):
    objects = DocFiscManager()

    cedente = models.ForeignKey(
        to="anagrafica.Impresa",
        blank=False,
        null=False,
        on_delete=models.PROTECT,
        related_name="docfisc_vendita",
    )

    committente = models.ForeignKey(
        to="anagrafica.SoggettoFiscale",
        null=False,
        blank=False,
        on_delete=models.PROTECT,
        related_name="docfisc_acquisto",
    )

    """ Dati generali del documento """
    codice_documento = models.ForeignKey(
        to="docfisc.CodiceDocumentoFiscale",
        null=False,
        blank=False,
        to_field="codice",
        default="TD01",
        on_delete=models.PROTECT,
        related_name="docfisc",
        db_column="codice_documento",
    )

    numero = models.CharField(null=False, blank=False, max_length=255)

    data = models.DateField(null=False, blank=False, help_text="data di emissione")

    data_ricezione = models.DateField(
        null=True, blank=True, help_text="data di ricezione SDI"
    )

    totale = models.DecimalField(
        null=False,
        blank=False,
        max_digits=19,
        decimal_places=2,
        validators=[MinValueValidator(0.0)],
    )

    condizioni_pagamento = models.ForeignKey(
        to="docfisc.CondizionePagamento",
        to_field="codice",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        db_column="condizioni_pagamento",
    )

    xml = models.FileField(
        blank=True,
        null=True,
        max_length=1000,
        storage=CustomStorage(),
        upload_to=dir_docfisc_xml,
    )

    @property
    def ricevuta(self):
        return True if self.data_ricezione_SDI is not None else False

    @property
    def saldata(self):
        scadenze = self.scadenze.totale()
        pagamenti = self.pagamenti.totale()

        return pagamenti >= scadenze

    @property
    def imponibile(self):
        totale = 0

        for riepilogo in self.riepiloghi_iva.all():
            totale += Decimal(riepilogo.imponibile)

        return Decimal(totale)

    @property
    def imposta(self):
        totale = 0

        for riepilogo in self.riepiloghi_iva.all():
            totale += Decimal(riepilogo.imposta)

        return Decimal(totale)

    @property
    def iva_aliquote(self):
        return iva_aliquote(self)

    @property
    def dettagli(self):
        return riepilogo_reparti(self)

    def __str__(self):
        return "{0} {1} #{2} emessa il {3}".format(
            self.codice_documento.codice,
            self.cedente.denominazione,
            self.numero,
            self.data,
        )

    class Meta:
        verbose_name_plural = "Documenti Fiscali"
