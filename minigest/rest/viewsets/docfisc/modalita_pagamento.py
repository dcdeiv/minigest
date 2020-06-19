from rest_framework import viewsets

from minigest.docfisc.models import ModalitaPagamento as mp
from rest.serializers import DocFiscModPagSerializer


class ModalitàPagamento(viewsets.ModelViewSet):
    queryset = mp.objects.all()
    serializer_class = DocFiscModPagSerializer
