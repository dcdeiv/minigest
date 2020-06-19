from rest_framework import serializers

from minigest.tributi.models import IvaAliquota


class IvaAliquotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = IvaAliquota
        fields = "__all__"
