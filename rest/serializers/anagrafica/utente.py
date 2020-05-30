from rest_framework import serializers

from minigest.anagrafica.models import Utente


class UtenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utente
        fields = ["id", "email", "cognome", "nome"]
