from rest_framework import viewsets

from minigest.fisco.models import RegimeFiscale as rf
from minigest.rest.serializers import RegimeFiscaleSerializer


class RegimeFiscale(viewsets.ModelViewSet):
    queryset = rf.objects.all()
    serializer_class = RegimeFiscaleSerializer
