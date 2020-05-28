from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer

from ...models import Impresa, PersonaFisica, SoggettoFiscale
from ..serializers import ImpresaSerializer, PersonaFisicaSerializer


class SoggettoFiscaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = SoggettoFiscale
        fields = "__all__"


class SoggettoFiscalePolymorphicSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        SoggettoFiscale: SoggettoFiscaleSerializer,
        Impresa: ImpresaSerializer,
        PersonaFisica: PersonaFisicaSerializer,
    }
