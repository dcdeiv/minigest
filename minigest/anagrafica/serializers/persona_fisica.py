from rest_framework import serializers

from ..models import PersonaFisica


class PersonaFisicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonaFisica
        exclude = ("polymorphic_ctype",)
