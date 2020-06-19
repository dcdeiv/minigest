from rest_framework import viewsets

from minigest.negozi.models import FondoCassa as fc
from minigest.rest.serializers import FondoCassaSerializer


class FondoCassa(viewsets.ModelViewSet):
    serializer_class = FondoCassaSerializer

    def get_queryset(self):
        return fc.objects.filter(cassa=self.kwargs["cassa_pk"])
