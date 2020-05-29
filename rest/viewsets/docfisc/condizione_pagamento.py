from rest_framework import viewsets

from minigest.docfisc.models import CondizionePagamento
from rest.serializers import DocFiscCondizionePagSerializer


class DocFiscCondizionePagamentoVS(viewsets.ModelViewSet):
    queryset = CondizionePagamento.objects.all()
    serializer_class = DocFiscCondizionePagSerializer
