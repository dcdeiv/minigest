""" isort:skip_file """

from rest_framework import viewsets

from minigest.fisco.models import (
    InteressiLegali,
    RegimeFiscale,
    TassoUfficialeRiferimento,
)
from ..serializers import (
    InteressiLegaliSerializer,
    RegimeFiscaleSerializer,
    TurSerializer,
)


class InteressiLegaliVS(viewsets.ModelViewSet):
    queryset = InteressiLegali.objects.all()
    serializer_class = InteressiLegaliSerializer


class RegimeFiscaleVS(viewsets.ModelViewSet):
    queryset = RegimeFiscale.objects.all()
    serializer_class = RegimeFiscaleSerializer


class TurVS(viewsets.ModelViewSet):
    queryset = TassoUfficialeRiferimento.objects.all()
    serializer_class = TurSerializer
