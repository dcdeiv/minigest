from rest_framework import viewsets

from ...models import SoggettoFiscale
from ..serializers import SoggettoFiscalePolymorphicSerializer


class SoggettoFiscaleViewSet(viewsets.ModelViewSet):
    queryset = SoggettoFiscale.objects.all()
    serializer_class = SoggettoFiscalePolymorphicSerializer
