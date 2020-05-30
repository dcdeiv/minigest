from rest_framework import viewsets

from minigest.anagrafica.models import DomicilioStabileOrganizzazione
from rest.serializers import DomicilioStabileOrgSerializer


class DomicilioStabileOrgVS(viewsets.ModelViewSet):
    serializer_class = DomicilioStabileOrgSerializer

    def get_queryset(self):
        return DomicilioStabileOrganizzazione.objects.filter(
            soggetto=self.kwargs["soggetto_pk"]
        )
