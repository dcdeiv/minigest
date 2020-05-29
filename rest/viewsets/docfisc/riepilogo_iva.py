from rest_framework import viewsets

from minigest.docfisc.models import DocFiscRiepilogoIva
from rest.serializers import DocFiscRiepilogoIvaSerializer


class DocFiscRiepilogoIvaVS(viewsets.ModelViewSet):
    serializer_class = DocFiscRiepilogoIvaSerializer

    def get_queryset(self):
        return DocFiscRiepilogoIva.objects.filter(docfisc=self.kwargs["docfisc_pk"])
