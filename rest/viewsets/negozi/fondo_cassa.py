from rest_framework import viewsets

from minigest.negozi.models import FondoCassa
from rest.serializers import FondoCassaSerializer


class FondoCassaVS(viewsets.ModelViewSet):
    serializer_class = FondoCassaSerializer

    def get_queryset(self):
        return FondoCassa.objects.filter(cassa=self.kwargs["cassa_pk"])
