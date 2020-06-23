from rest_framework import serializers


class BilancioSerializer(serializers.Serializer):
    periodo = serializers.CharField()
    entrate = serializers.JSONField()
    uscite = serializers.JSONField()
    bilancio = serializers.JSONField()
