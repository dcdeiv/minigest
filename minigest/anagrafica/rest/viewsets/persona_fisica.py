from rest_framework import viewsets

from ...models import PersonaFisica
from ..serializers import PersonaFisicaSerializer


class PersonaFisicaViewSet(viewsets.ModelViewSet):
    queryset = PersonaFisica.objects.all()
    serializer_class = PersonaFisicaSerializer
