from rest_framework import serializers

from minigest.account.models import Utente
from minigest.anagrafica.serializers import ImpresaRelazioneSerializer


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
        read_only_fields = ["id", "is_staff", "is_authenticated", "imprese"]
