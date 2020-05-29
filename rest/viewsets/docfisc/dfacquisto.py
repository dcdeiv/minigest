from rest_framework import viewsets

from minigest.docfisc.models import DocumentoFiscale as df
from rest.serializers import DocFiscSerializer


class DocFiscAcquistoVS(viewsets.ModelViewSet):
    serializer_class = DocFiscSerializer

    def get_queryset(self):
        return df.objects.filter(committente=self.kwargs["impresa_pk"])
