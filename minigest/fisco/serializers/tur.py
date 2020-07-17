from rest_framework import serializers

from minigest.fisco.models import TassoUfficialeRiferimento


class TurSerializer(serializers.ModelSerializer):
    class Meta:
        model = TassoUfficialeRiferimento
        fields = "__all__"
