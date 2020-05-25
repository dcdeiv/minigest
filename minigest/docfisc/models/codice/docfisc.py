from minigest.common.models.abstract import CodiceAbstract


class CodiceDocumentoFiscale(CodiceAbstract):
    class Meta:
        verbose_name = "Tipo di documento fiscale"
        verbose_name_plural = "Tipi di documento fiscale"
        ordering = ["codice"]
