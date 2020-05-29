from rest_framework import viewsets

from minigest.docfisc.models import DocFiscScadenza
from rest.serializers import DocFiscScadenzaSerializer


class DocFiscScadenzaVS(viewsets.ModelViewSet):
    serializer_class = DocFiscScadenzaSerializer

    def get_queryset(self):
        return DocFiscScadenza.objects.filter(docfisc=self.kwargs["docfisc_pk"])
