from rest_framework import viewsets

from minigest.docfisc.models import CodiceDocumentoFiscale as cdf
from minigest.rest.serializers import DocFiscCodiceSerializer


class CodiceDocumentoFiscale(viewsets.ModelViewSet):
    queryset = cdf.objects.all()
    serializer_class = DocFiscCodiceSerializer
