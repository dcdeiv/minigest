from rest_framework import serializers

from ...models import DomicilioFiscale, DomicilioStabileOrganizzazione


class DomicilioFiscaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomicilioFiscale
        fields = "__all__"


class DomicilioStabileOrganizzazioneSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomicilioStabileOrganizzazione
        fields = "__all__"
