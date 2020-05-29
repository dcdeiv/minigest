from rest_framework import viewsets

from minigest.docfisc.models import NaturaOperazione
from rest.serializers import DocFiscNaturaOperazioneSerializer


class DocFiscNaturaOperazioneVS(viewsets.ModelViewSet):
    queryset = NaturaOperazione.objects.all()
    serializer_class = DocFiscNaturaOperazioneSerializer
