from rest_framework import serializers

from minigest.anagrafica.models import Impresa
from rest.serializers.fisco.regime_fiscale import RegimeFiscaleSerializer
from .domicilio_fiscale import ImpresaSedeSerializer
from .domicilio_stabile import ImpresaStabileOrganizzazioneSerializer


class ImpresaRelazioneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Impresa
        fields = (
            "id",
            "denominazione",
        )


class ImpresaSerializer(serializers.ModelSerializer):
    sede = ImpresaSedeSerializer(source="domicilio_fiscale", read_only=True)
    stabile_organizzazione = ImpresaStabileOrganizzazioneSerializer(read_only=True)
    regime_fiscale = RegimeFiscaleSerializer(read_only=True)

    class Meta:
        model = Impresa
        fields = (
            "id",
            "denominazione",
            "id_fiscale_iva_paese",
            "id_fiscale_iva_codice",
            "codice_fiscale",
            "codice_destinatario",
            "pec",
            "sede",
            "stabile_organizzazione",
            "email",
            "telefono",
            "fax",
            "codice_eori",
            "albo_professionale",
            "albo_provincia",
            "albo_numero_iscrizione",
            "albo_data_iscrizione",
            "rea_ufficio",
            "rea_numero",
            "capitale_sociale",
            "socio_unico",
            "stato_liquidazione",
            "riferimento_amministrazione",
            "rappresentante_fiscale",
            "regime_fiscale",
            "utenti",
        )
