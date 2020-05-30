from rest_framework import serializers

from minigest.anagrafica.models import DomicilioFiscale


class DomicilioFiscaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomicilioFiscale
        fields = "__all__"
