from rest_framework import viewsets

from minigest.anagrafica.models import PersonaFisica
from rest.serializers import PersonaFisicaSerializer


class PersonaFisicaVS(viewsets.ModelViewSet):
    queryset = PersonaFisica.objects.all()
    serializer_class = PersonaFisicaSerializer
