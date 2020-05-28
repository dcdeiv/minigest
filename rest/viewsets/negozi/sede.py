from rest_framework import viewsets

from minigest.negozi.models import NegozioSede
from ...serializers import NegozioSedeSerializer


class NegozioSedeVS(viewsets.ModelViewSet):
    serializer_class = NegozioSedeSerializer

    def get_queryset(self):
        return NegozioSede.objects.filter(negozio=self.kwargs["negozio_pk"])
