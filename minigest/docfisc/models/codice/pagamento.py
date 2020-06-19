from minigest.common.models.abstract import CodiceAbstract


class ModalitaPagamento(CodiceAbstract):
    class Meta:
        verbose_name = "Modalità di pagamento"
        verbose_name_plural = "Modalità di pagamento"
        ordering = ["codice"]
