from rest_framework import viewsets

from minigest.anagrafica.models import DomicilioStabileOrganizzazione as dso
from minigest.anagrafica.serializers import DomicilioStabileOrgSerializer


class DomicilioStabileOrganizzazione(viewsets.ModelViewSet):
    serializer_class = DomicilioStabileOrgSerializer

    def get_queryset(self):
        return dso.objects.filter(soggetto=self.kwargs["soggetto_pk"])
