from rest_framework import serializers

from minigest.anagrafica.models import PersonaFisica


class PersonaFisicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonaFisica
        exclude = ("polymorphic_ctype",)
