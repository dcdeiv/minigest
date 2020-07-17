from rest_framework import viewsets

from minigest.anagrafica.models import DomicilioFiscale as df
from minigest.anagrafica.serializers import DomicilioFiscaleSerializer


class DomicilioFiscale(viewsets.ModelViewSet):
    serializer_class = DomicilioFiscaleSerializer

    def get_queryset(self):
        return df.objects.filter(soggetto=self.kwargs["soggetto_pk"])
