from rest_framework import serializers

from minigest.docfisc.models import CondizionePagamento


class DocFiscCondizionePagSerializer(serializers.ModelSerializer):
    class Meta:
        model = CondizionePagamento
        fields = ["id", "codice", "descrizione"]
