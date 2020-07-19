from rest_framework import viewsets

from minigest.anagrafica.models import Impresa as i
from minigest.anagrafica.serializers import ImpresaSerializer


class Impresa(viewsets.ModelViewSet):
    queryset = i.objects.all()
    serializer_class = ImpresaSerializer