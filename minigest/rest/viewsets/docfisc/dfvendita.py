from rest_framework import viewsets

from minigest.docfisc.models import DocumentoFiscale as df
from minigest.rest.serializers import DocFiscSerializer


class DocumentoFiscaleVendita(viewsets.ModelViewSet):
    serializer_class = DocFiscSerializer

    def get_queryset(self):
        return df.objects.filter(cedente=self.kwargs["impresa_pk"])
