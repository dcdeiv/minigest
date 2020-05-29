from rest_framework import serializers

from minigest.docfisc.models import DocFiscScadenza


class DocFiscScadenzaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocFiscScadenza
        fields = "__all__"
