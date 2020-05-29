from rest_framework import serializers

from minigest.docfisc.models import DocFiscPagamento


class DocFiscPagamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocFiscPagamento
        fields = "__all__"
