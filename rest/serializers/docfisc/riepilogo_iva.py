from rest_framework import serializers

from minigest.docfisc.models import DocFiscRiepilogoIva


class DocFiscRiepilogoIvaSerializer(serializers.ModelSerializer):
    iva_aliquota = serializers.CharField()

    class Meta:
        model = DocFiscRiepilogoIva
        fields = "__all__"
