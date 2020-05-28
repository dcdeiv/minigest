from rest_framework import serializers

from minigest.negozi.models import Orario, OrarioVariante


class OrarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orario
        fields = "__all__"


class OrarioVarianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrarioVariante
        fields = "__all__"
