from rest_framework import serializers

from minigest.docfisc.models import ChiusuraFiscale


class ChiusuraFiscaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChiusuraFiscale
        fields = [
            "id",
            "cassa",
            "data",
            "totale_doc",
            "sconti",
            "totale_lordo",
            "non_riscosso",
            "annulli",
            "resi",
            "totale",
            "imposta",
            "imponibile",
            "dettagli",
        ]
        read_only_fields = [
            "id",
            "totale_lordo",
            "non_riscosso",
            "annulli",
            "resi",
            "totale",
            "imposta",
            "imponibile",
            "dettagli",
        ]
