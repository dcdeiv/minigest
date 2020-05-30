from rest_framework import viewsets

from minigest.anagrafica.models import Utente as u
from rest.serializers import UtenteSerializer


class Utente(viewsets.ModelViewSet):
    queryset = u.objects.all()
    serializer_class = UtenteSerializer
