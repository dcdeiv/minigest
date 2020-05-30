from rest_framework import serializers


class FatturatoSerializer(serializers.Serializer):
    periodo = serializers.CharField()
    totale = serializers.CharField()
    imposta = serializers.CharField()
    imponibile = serializers.CharField()
    totale_doc = serializers.CharField()
    dettagli = serializers.JSONField()
