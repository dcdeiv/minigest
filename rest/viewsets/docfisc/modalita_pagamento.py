from rest_framework import viewsets

from minigest.docfisc.models import ModalitaPagamento
from rest.serializers import DocFiscModPagSerializer


class DocFiscModalitaPagamentoliVS(viewsets.ModelViewSet):
    queryset = ModalitaPagamento.objects.all()
    serializer_class = DocFiscModPagSerializer
