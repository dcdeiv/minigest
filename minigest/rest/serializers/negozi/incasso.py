from rest_framework import serializers

from minigest.negozi.models import Incasso


class IncassoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incasso
        fields = "__all__"
