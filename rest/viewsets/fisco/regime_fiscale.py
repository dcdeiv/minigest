from rest_framework import viewsets

from minigest.fisco.models import RegimeFiscale
from rest.serializers import RegimeFiscaleSerializer


class RegimeFiscaleVS(viewsets.ModelViewSet):
    queryset = RegimeFiscale.objects.all()
    serializer_class = RegimeFiscaleSerializer
