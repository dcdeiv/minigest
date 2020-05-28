from rest_framework import viewsets

from ...models import Utente
from ..serializers import UtenteSerializer


class UtenteViewSet(viewsets.ModelViewSet):
    queryset = Utente.objects.all()
    serializer_class = UtenteSerializer
