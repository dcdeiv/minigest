from rest_framework import viewsets

from minigest.anagrafica.models import DomicilioFiscale
from rest.serializers import DomicilioFiscaleSerializer


class DomicilioFiscaleVS(viewsets.ModelViewSet):
    serializer_class = DomicilioFiscaleSerializer

    def get_queryset(self):
        return DomicilioFiscale.objects.filter(soggetto=self.kwargs["soggetto_pk"])
