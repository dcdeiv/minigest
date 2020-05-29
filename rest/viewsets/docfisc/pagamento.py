from rest_framework import viewsets

from minigest.docfisc.models import DocFiscPagamento
from rest.serializers import DocFiscPagamentoSerializer


class DocFiscPagamentoVS(viewsets.ModelViewSet):
    serializer_class = DocFiscPagamentoSerializer

    def get_queryset(self):
        return DocFiscPagamento.objects.filter(docfisc=self.kwargs["docfisc_pk"])
