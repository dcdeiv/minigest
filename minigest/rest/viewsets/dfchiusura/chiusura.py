from rest_framework import viewsets

from minigest.docfisc.models import ChiusuraFiscale as cf
from rest.serializers import ChiusuraFiscaleSerializer


class ChiusuraFiscale(viewsets.ModelViewSet):
    serializer_class = ChiusuraFiscaleSerializer

    def get_queryset(self):
        return cf.objects.filter(cassa=self.kwargs["cassa_pk"])
