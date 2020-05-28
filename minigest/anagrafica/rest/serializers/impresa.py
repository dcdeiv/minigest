from rest_framework import serializers

from ...models import Impresa


class ImpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Impresa
        exclude = ("polymorphic_ctype",)
