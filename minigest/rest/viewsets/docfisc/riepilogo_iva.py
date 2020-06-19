from rest_framework import viewsets

from minigest.docfisc.models import DocFiscRiepilogoIva as dfri
from rest.serializers import DocFiscRiepilogoIvaSerializer


class DocumentoFiscaleRiepilogoIVA(viewsets.ModelViewSet):
    serializer_class = DocFiscRiepilogoIvaSerializer

    def get_queryset(self):
        return dfri.objects.filter(docfisc=self.kwargs["docfisc_pk"])
