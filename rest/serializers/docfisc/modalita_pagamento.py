from rest_framework import serializers

from minigest.docfisc.models import ModalitaPagamento


class DocFiscModPagSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModalitaPagamento
        fields = ["id", "codice", "descrizione"]
