from rest_framework import serializers

from minigest.docfisc.models import ChiusuraRepartoIva


class ChiusuraRepartoIvaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChiusuraRepartoIva
        fields = [
            "id",
            "chiusura",
            "iva_reparto",
            "iva_aliquota",
            "totale_lordo",
            "non_riscosso",
            "annulli",
            "resi",
            "totale",
            "imposta",
            "imponibile",
        ]
        read_only_fields = [
            "iva_aliquota",
            "totale",
            "imposta",
            "imponibile",
        ]
