from rest_framework import serializers

from minigest.anagrafica.models import RelazioneAziendale


class RelazioneAziendaleUtenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = RelazioneAziendale
        fields = ("utente",)


class RelazioneAziendaleImpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = RelazioneAziendale
        fields = ("impresa",)
