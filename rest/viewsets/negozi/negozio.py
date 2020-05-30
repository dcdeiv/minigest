from rest_framework import viewsets

from minigest.negozi.models import Negozio as n
from rest.serializers import NegozioSerializer


class Negozio(viewsets.ModelViewSet):
    serializer_class = NegozioSerializer

    def get_queryset(self):
        return n.objects.filter(impresa=self.kwargs["impresa_pk"])
