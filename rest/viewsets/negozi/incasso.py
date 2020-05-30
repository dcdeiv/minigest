from rest_framework import viewsets

from minigest.negozi.models import Incasso
from rest.serializers import IncassoSerializer


class IncassoVS(viewsets.ModelViewSet):
    serializer_class = IncassoSerializer

    def get_queryset(self):
        return Incasso.objects.filter(cassa=self.kwargs["cassa_pk"])
