""" isort:skip_file """

from rest_framework import viewsets

from ...models import InteressiLegali, RegimeFiscale, TassoUfficialeRiferimento
from ..serializers import (
    InteressiLegaliSerializer,
    RegimeFiscaleSerializer,
    TurSerializer,
)


class InteressiLegaliViewSet(viewsets.ModelViewSet):
    queryset = InteressiLegali.objects.all()
    serializer_class = InteressiLegaliSerializer


class RegimeFiscaleViewSet(viewsets.ModelViewSet):
    queryset = RegimeFiscale.objects.all()
    serializer_class = RegimeFiscaleSerializer


class TurViewSet(viewsets.ModelViewSet):
    queryset = TassoUfficialeRiferimento.objects.all()
    serializer_class = TurSerializer
