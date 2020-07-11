from rest_framework import serializers

from minigest.account.models import Utente


class UtenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utente
        fields = [
            "id",
            "is_staff",
            "is_authenticated",
            "email",
            "cognome",
            "nome",
        ]
