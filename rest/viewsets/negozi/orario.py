from rest_framework import viewsets

from minigest.negozi.models import Orario, OrarioVariante
from rest.serializers import OrarioSerializer, OrarioVarianteSerializer


class OrarioVS(viewsets.ModelViewSet):
    serializer_class = OrarioSerializer

    def get_queryset(self):
        return Orario.objects.filter(negozio=self.kwargs["negozio_pk"])


class OrarioVarianteVS(viewsets.ModelViewSet):
    serializer_class = OrarioVarianteSerializer

    def get_queryset(self):
        return OrarioVariante.objects.filter(negozio=self.kwargs["negozio_pk"])
