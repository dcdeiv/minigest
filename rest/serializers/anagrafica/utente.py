from rest_framework import serializers

from minigest.anagrafica.models import Utente
from .impresa import ImpresaRelazioneSerializer


class UtenteSerializer(serializers.ModelSerializer):
    imprese = ImpresaRelazioneSerializer(many=True, read_only=True)

    class Meta:
        model = Utente
        fields = [
            "id",
            "is_staff",
            "is_authenticated",
            "email",
            "cognome",
            "nome",
            "imprese",
        ]
