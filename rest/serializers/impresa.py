from rest_framework import serializers

from minigest.anagrafica.models import Impresa


class ImpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Impresa
        exclude = ("polymorphic_ctype",)
        depth = 1
