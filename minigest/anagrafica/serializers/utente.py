from rest_framework import serializers

from ..models import Utente


class UtenteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Utente
        fields = [
            "email",
            "nome",
            "cognome",
            "is_staff",
        ]
