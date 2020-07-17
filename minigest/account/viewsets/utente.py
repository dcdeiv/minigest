from rest_framework import viewsets

from minigest.account.models import Utente as u
from minigest.account.serializers import UtenteSerializer


class Utente(viewsets.ModelViewSet):
    queryset = u.objects.all()
    serializer_class = UtenteSerializer
