from docfisc.models import DocFiscPagamento


def pagamenti(self, dal, al):
    return DocFiscPagamento.objects.committente(self).periodo(dal, al)
