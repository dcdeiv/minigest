from rest_framework import serializers

from minigest.negozi.models import Cassa


class CassaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cassa
        fields = "__all__"
