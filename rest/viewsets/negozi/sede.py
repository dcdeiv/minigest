from rest_framework import viewsets

from minigest.negozi.models import NegozioSede as ns
from rest.serializers import NegozioSedeSerializer


class SedeNegozio(viewsets.ModelViewSet):
    serializer_class = NegozioSedeSerializer

    def get_queryset(self):
        return ns.objects.filter(negozio=self.kwargs["negozio_pk"])
