from rest_framework import viewsets

from minigest.negozi.models import Incasso as i
from minigest.rest.serializers import IncassoSerializer


class Incasso(viewsets.ModelViewSet):
    serializer_class = IncassoSerializer

    def get_queryset(self):
        return i.objects.filter(cassa=self.kwargs["cassa_pk"])
