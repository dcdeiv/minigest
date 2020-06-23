from rest_framework import serializers

from minigest.docfisc.models import DocumentoFiscale


class DocFiscSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentoFiscale
        fields = [
            "id",
            "cedente",
            "committente",
            "codice_documento",
            "numero",
            "data",
            "data_ricezione",
            "totale",
            "condizioni_pagamento",
            "xml",
            "ricevuta",
            "saldata",
            "imponibile",
            "imposta",
            "iva_aliquote",
            "dettagli",
        ]
        read_only_fields = [
            "ricevuta",
            "saldata",
            "imponibile",
            "imposta",
            "iva_aliquote",
            "dettagli",
        ]
