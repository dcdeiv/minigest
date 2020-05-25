from common.models.abstract import CodiceAbstract


class NaturaOperazione(CodiceAbstract):
    class Meta:
        verbose_name = "Natura operazione"
        verbose_name_plural = "Natura delle operazioni"
        ordering = ["codice"]
