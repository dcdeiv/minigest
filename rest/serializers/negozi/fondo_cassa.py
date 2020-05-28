from rest_framework import serializers

from minigest.negozi.models import FondoCassa


class FondoCassaSerializer(serializers.ModelSerializer):
    class Meta:
        model = FondoCassa
        fields = "__all__"
