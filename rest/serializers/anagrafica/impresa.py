from rest_framework import serializers

from minigest.anagrafica.models import Impresa
from .relazione_aziendale import RelazioneAziendaleUtenteSerializer


class ImpresaSerializer(serializers.ModelSerializer):
    utenti = RelazioneAziendaleUtenteSerializer(many=True, read_only=True)

    class Meta:
        model = Impresa
        exclude = ("polymorphic_ctype",)
        depth = 1
