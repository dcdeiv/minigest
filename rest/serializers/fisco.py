""" isort:skip_file """

from rest_framework import serializers

from minigest.fisco.models import (
    InteressiLegali,
    RegimeFiscale,
    TassoUfficialeRiferimento,
)


class InteressiLegaliSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteressiLegali
        fields = "__all__"


class RegimeFiscaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegimeFiscale
        fields = "__all__"


class TurSerializer(serializers.ModelSerializer):
    class Meta:
        model = TassoUfficialeRiferimento
        fields = "__all__"
