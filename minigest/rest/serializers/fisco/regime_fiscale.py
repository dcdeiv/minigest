from rest_framework import serializers

from minigest.fisco.models import RegimeFiscale


class RegimeFiscaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegimeFiscale
        fields = "__all__"
