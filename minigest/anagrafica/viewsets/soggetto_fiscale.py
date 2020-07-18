from rest_framework import viewsets

from minigest.anagrafica.models import SoggettoFiscale as sf
from minigest.anagrafica.serializers import SoggettoFiscaleSerializer


class SoggettoFiscale(viewsets.ModelViewSet):
    queryset = sf.objects.all()
    serializer_class = SoggettoFiscaleSerializer
