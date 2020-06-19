from rest_framework import viewsets

from minigest.negozi.models import Cassa as c
from minigest.rest.serializers import CassaSerializer


class Cassa(viewsets.ModelViewSet):
    serializer_class = CassaSerializer

    def get_queryset(self):
        return c.objects.filter(negozio=self.kwargs["negozio_pk"])
