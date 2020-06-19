from rest_framework import viewsets

from minigest.docfisc.models import NaturaOperazione as np
from rest.serializers import DocFiscNaturaOperazioneSerializer


class NaturaOperazioneIVA(viewsets.ModelViewSet):
    queryset = np.objects.all()
    serializer_class = DocFiscNaturaOperazioneSerializer
