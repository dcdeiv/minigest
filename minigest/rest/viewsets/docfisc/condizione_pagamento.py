from rest_framework import viewsets

from minigest.docfisc.models import CondizionePagamento as cp
from minigest.rest.serializers import DocFiscCondizionePagSerializer


class CondizionePagamento(viewsets.ModelViewSet):
    queryset = cp.objects.all()
    serializer_class = DocFiscCondizionePagSerializer
