from rest_framework import viewsets

from minigest.negozi.models import Orario as o
from rest.serializers import OrarioSerializer


class Orario(viewsets.ModelViewSet):
    serializer_class = OrarioSerializer

    def get_queryset(self):
        return o.objects.filter(negozio=self.kwargs["negozio_pk"])
