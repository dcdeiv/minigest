from rest_framework import viewsets

from minigest.negozi.models import Cassa
from rest.serializers import CassaSerializer


class CassaVS(viewsets.ModelViewSet):
    serializer_class = CassaSerializer

    def get_queryset(self):
        return Cassa.objects.filter(negozio=self.kwargs["negozio_pk"])
