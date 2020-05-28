from rest_framework import serializers

from minigest.anagrafica.models import DomicilioFiscale, DomicilioStabileOrganizzazione


class DomicilioFiscaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomicilioFiscale
        fields = "__all__"


class DomicilioStabileOrgSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomicilioStabileOrganizzazione
        fields = "__all__"
