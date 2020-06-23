from rest_framework import viewsets

from minigest.docfisc.models import ChiusuraRepartoIva as cri
from minigest.rest.serializers import ChiusuraRepartoIvaSerializer


class ChiusuraFiscaleRepartoIva(viewsets.ModelViewSet):
    serializer_class = ChiusuraRepartoIvaSerializer

    def get_queryset(self):
        return cri.objects.filter(chiusura=self.kwargs["chiusura_pk"])
