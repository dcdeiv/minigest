from rest_framework import serializers

from minigest.docfisc.models import NaturaOperazione


class DocFiscNaturaOperazioneSerializer(serializers.ModelSerializer):
    class Meta:
        model = NaturaOperazione
        fields = ["id", "codice", "descrizione"]
