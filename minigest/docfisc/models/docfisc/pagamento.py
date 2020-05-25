from django.core.validators import MinValueValidator
from django.db import models
from minigest.storage import CustomStorage

from ...helpers.docfisc import dir_docfisc_quietanza
from ...managers import DocFiscPagamentoManager
from .rata import RataAbstract


class DocFiscPagamento(RataAbstract):
    objects = DocFiscPagamentoManager()

    docfisc = models.ForeignKey(
        to="docfisc.DocumentoFiscale",
        on_delete=models.CASCADE,
        related_name="pagamenti",
    )

    interessi = models.DecimalField(
        blank=True,
        null=True,
        max_digits=19,
        decimal_places=2,
        default=0.00,
        validators=[MinValueValidator(0.0)],
    )

    sanzione = models.DecimalField(
        blank=True,
        null=True,
        max_digits=19,
        decimal_places=2,
        default=0.00,
        validators=[MinValueValidator(0.0)],
    )

    quietanza = models.FileField(
        blank=True,
        null=True,
        max_length=1000,
        storage=CustomStorage(),
        upload_to=dir_docfisc_quietanza,
    )

    def __str__(self):
        return "pagamento {0} #{1} il {2} - {3} €".format(
            self.docfisc.codice_documento.codice,
            self.docfisc.numero,
            self.data,
            self.importo,
        )

    class Meta:
        verbose_name = "Dettagli pagamento documento fiscale"
        verbose_name_plural = "Dettagli pagamenti documento fiscale"
