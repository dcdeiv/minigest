from rest_framework import serializers

from minigest.negozi.models import NegozioSede


class NegozioSedeSerializer(serializers.ModelSerializer):
    class Meta:
        model = NegozioSede
        fields = "__all__"
