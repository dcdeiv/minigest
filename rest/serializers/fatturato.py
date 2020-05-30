from rest_framework import serializers


class FatturatoSerializer(serializers.Serializer):
    totale = serializers.CharField()
    imposta = serializers.CharField()
    imponibile = serializers.CharField()
    totale_doc = serializers.CharField()
    dettagli = serializers.JSONField()
