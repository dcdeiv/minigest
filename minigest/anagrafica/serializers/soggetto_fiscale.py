from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer

from minigest.anagrafica.models import Impresa, PersonaFisica


class ImpresaPolymorphicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Impresa
        fields = [
            "id",
            "titolo",
            "nome",
            "cognome",
            "denominazione",
            "id_fiscale_iva_paese",
            "id_fiscale_iva_codice",
            "codice_fiscale",
        ]


class PersonaFisicaPolymorphicSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonaFisica
        fields = ["id", "titolo", "nome", "cognome", "codice_fiscale"]


class SoggettoFiscaleSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        Impresa: ImpresaPolymorphicSerializer,
        PersonaFisica: PersonaFisicaPolymorphicSerializer,
    }

    def to_resource_type(self, model_or_instance):
        return model_or_instance._meta.object_name.lower()
