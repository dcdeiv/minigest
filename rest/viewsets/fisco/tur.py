from rest_framework import viewsets

from minigest.fisco.models import TassoUfficialeRiferimento
from rest.serializers import TurSerializer


class TurVS(viewsets.ModelViewSet):
    queryset = TassoUfficialeRiferimento.objects.all()
    serializer_class = TurSerializer
