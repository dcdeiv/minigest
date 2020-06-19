from rest_framework import viewsets

from minigest.anagrafica.models import PersonaFisica as pf
from minigest.rest.serializers import PersonaFisicaSerializer


class PersonaFisica(viewsets.ModelViewSet):
    queryset = pf.objects.all()
    serializer_class = PersonaFisicaSerializer
