from rest_framework import serializers

from minigest.docfisc.models import CodiceDocumentoFiscale


class DocFiscCodiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodiceDocumentoFiscale
        fields = ["id", "codice", "descrizione"]
