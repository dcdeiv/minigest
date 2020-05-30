from rest_framework import viewsets

from minigest.docfisc.models import ChiusuraFiscale
from rest.serializers import ChiusuraFiscaleSerializer


class ChiusuraFiscaleVS(viewsets.ModelViewSet):
    serializer_class = ChiusuraFiscaleSerializer

    def get_queryset(self):
        return ChiusuraFiscale.objects.filter(cassa=self.kwargs["cassa_pk"])
