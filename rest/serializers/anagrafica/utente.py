from rest_framework import serializers

from minigest.anagrafica.models import Utente
from .relazione_aziendale import RelazioneAziendaleImpresaSerializer


class UtenteSerializer(serializers.ModelSerializer):
    imprese = RelazioneAziendaleImpresaSerializer(many=True, read_only=True)

    class Meta:
        model = Utente
        fields = ["id", "email", "cognome", "nome", "imprese"]
