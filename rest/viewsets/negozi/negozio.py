from rest_framework import viewsets

from minigest.negozi.models import Negozio
from ...serializers import NegozioSerializer


class NegozioVS(viewsets.ModelViewSet):
    serializer_class = NegozioSerializer

    def get_queryset(self):
        return Negozio.objects.filter(impresa=self.kwargs["impresa_pk"])
