from rest_framework import viewsets

from minigest.docfisc.models import DocFiscScadenza as dfs
from rest.serializers import DocFiscScadenzaSerializer


class DocumentoFiscaleScadenza(viewsets.ModelViewSet):
    serializer_class = DocFiscScadenzaSerializer

    def get_queryset(self):
        return dfs.objects.filter(docfisc=self.kwargs["docfisc_pk"])
