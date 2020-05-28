from rest_framework import viewsets

from ...models import Impresa
from ..serializers import ImpresaSerializer


class ImpresaViewSet(viewsets.ModelViewSet):
    queryset = Impresa.objects.all()
    serializer_class = ImpresaSerializer
