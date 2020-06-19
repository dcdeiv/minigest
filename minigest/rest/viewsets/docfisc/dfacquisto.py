from rest_framework import viewsets

from minigest.docfisc.models import DocumentoFiscale as df
from minigest.rest.serializers import DocFiscSerializer


class DocumentoFiscaleAcquisto(viewsets.ModelViewSet):
    serializer_class = DocFiscSerializer

    def get_queryset(self):
        return df.objects.filter(committente=self.kwargs["impresa_pk"])
