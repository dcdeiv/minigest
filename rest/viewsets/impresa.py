from rest_framework import viewsets

from minigest.anagrafica.models import Impresa
from ..serializers import ImpresaSerializer


class ImpresaVS(viewsets.ModelViewSet):
    queryset = Impresa.objects.all()
    serializer_class = ImpresaSerializer
