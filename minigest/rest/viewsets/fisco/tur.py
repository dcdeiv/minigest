from rest_framework import viewsets

from minigest.fisco.models import TassoUfficialeRiferimento as tur
from minigest.rest.serializers import TurSerializer


class TassoUfficialeRiferimento(viewsets.ModelViewSet):
    queryset = tur.objects.all()
    serializer_class = TurSerializer
