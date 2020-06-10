from rest_framework import serializers

from minigest.anagrafica.models import DomicilioStabileOrganizzazione


class DomicilioStabileOrgSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomicilioStabileOrganizzazione
        fields = "__all__"


class ImpresaStabileOrganizzazioneSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomicilioStabileOrganizzazione
        exclude = ("soggetto",)
