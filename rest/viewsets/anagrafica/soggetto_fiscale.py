from rest_framework import viewsets

from minigest.anagrafica.models import SoggettoFiscale
from rest.serializers import SoggettoFiscalePolymorphicSerializer


class SoggettoFiscaleVS(viewsets.ModelViewSet):
    queryset = SoggettoFiscale.objects.all()
    serializer_class = SoggettoFiscalePolymorphicSerializer
