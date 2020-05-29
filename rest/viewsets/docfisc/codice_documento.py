from rest_framework import viewsets

from minigest.docfisc.models import CodiceDocumentoFiscale
from rest.serializers import DocFiscCodiceSerializer


class DocFiscCodiceVS(viewsets.ModelViewSet):
    queryset = CodiceDocumentoFiscale.objects.all()
    serializer_class = DocFiscCodiceSerializer
