from rest_framework import serializers

from minigest.fisco.models import InteressiLegali


class InteressiLegaliSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteressiLegali
        fields = "__all__"
