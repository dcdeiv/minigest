""" isort:skip_files """

from rest_framework import viewsets

from minigest.anagrafica.models import DomicilioFiscale, DomicilioStabileOrganizzazione
from ..serializers import (
    DomicilioFiscaleSerializer,
    DomicilioStabileOrgSerializer,
)


class DomicilioFiscaleVS(viewsets.ModelViewSet):
    serializer_class = DomicilioFiscaleSerializer

    def get_queryset(self):
        return DomicilioFiscale.objects.filter(soggetto=self.kwargs["soggetto_pk"])


class DomicilioStabileOrgVS(viewsets.ModelViewSet):
    serializer_class = DomicilioStabileOrgSerializer

    def get_queryset(self):
        return DomicilioStabileOrganizzazione.objects.filter(
            soggetto=self.kwargs["soggetto_pk"]
        )
