from rest_framework import viewsets

from minigest.negozi.models import OrarioVariante as ov
from rest.serializers import OrarioVarianteSerializer


class OrarioVariante(viewsets.ModelViewSet):
    serializer_class = OrarioVarianteSerializer

    def get_queryset(self):
        return ov.objects.filter(negozio=self.kwargs["negozio_pk"])
