from rest_framework import serializers

from minigest.negozi.models import Negozio


class NegozioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Negozio
        fields = "__all__"
