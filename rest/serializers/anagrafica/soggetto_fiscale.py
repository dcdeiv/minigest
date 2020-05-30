from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer

from minigest.anagrafica.models import Impresa, PersonaFisica, SoggettoFiscale
from ..serializers import ImpresaSerializer, PersonaFisicaSerializer


class SoggettoFiscaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = SoggettoFiscale
        fields = ["id", "resourcetype"]


class SoggettoFiscalePolymorphicSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        SoggettoFiscale: SoggettoFiscaleSerializer,
        Impresa: ImpresaSerializer,
        PersonaFisica: PersonaFisicaSerializer,
    }

    def to_resource_type(self, model_or_instance):
        return model_or_instance._meta.object_name.lower()
