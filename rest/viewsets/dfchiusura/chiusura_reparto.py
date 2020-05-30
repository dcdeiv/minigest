from rest_framework import viewsets

from minigest.docfisc.models import ChiusuraRepartoIva
from rest.serializers import ChiusuraRepartoIvaSerializer


class ChiusuraRepartoIvaVS(viewsets.ModelViewSet):
    serializer_class = ChiusuraRepartoIvaSerializer

    def get_queryset(self):
        return ChiusuraRepartoIva.objects.filter(chiusura=self.kwargs["chiusura_pk"])
