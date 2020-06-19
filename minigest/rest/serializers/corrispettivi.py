from rest_framework import serializers


class CorrispettiviSerializer(serializers.Serializer):
    periodo = serializers.CharField()
    riepilogo = serializers.JSONField()
    riepilogo_reparti = serializers.JSONField()
    iva_aliquote = serializers.JSONField()
    corrispettivi = serializers.JSONField()
