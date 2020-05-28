""" isort:skip_files """

from rest_framework import viewsets

from ...models import DomicilioFiscale, DomicilioStabileOrganizzazione
from ..serializers import (
    DomicilioFiscaleSerializer,
    DomicilioStabileOrganizzazioneSerializer,
)


class DomicilioFiscaleViewSet(viewsets.ModelViewSet):
    serializer_class = DomicilioFiscaleSerializer

    def get_queryset(self):
        return DomicilioFiscale.objects.filter(soggetto=self.kwargs["soggetto_pk"])


class DomicilioStabileOrganizzazioneViewSet(viewsets.ModelViewSet):
    serializer_class = DomicilioStabileOrganizzazioneSerializer

    def get_queryset(self):
        return DomicilioStabileOrganizzazione.objects.filter(
            soggetto=self.kwargs["soggetto_pk"]
        )
