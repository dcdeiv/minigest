from rest_framework import viewsets

from minigest.docfisc.models import DocFiscPagamento as dfp
from rest.serializers import DocFiscPagamentoSerializer


class DocumentoFiscalePagamento(viewsets.ModelViewSet):
    serializer_class = DocFiscPagamentoSerializer

    def get_queryset(self):
        return dfp.objects.filter(docfisc=self.kwargs["docfisc_pk"])
