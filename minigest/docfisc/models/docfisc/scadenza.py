from localflavor.generic.countries.sepa import IBAN_SEPA_COUNTRIES
from localflavor.generic.models import BICField, IBANField

from .rata import RataAbstract

from django.core.validators import MinLengthValidator, MinValueValidator

from django.db import models


class DocFiscScadenza(RataAbstract):
    docfisc = models.ForeignKey(
        to="docfisc.DocumentoFiscale", on_delete=models.CASCADE, related_name="scadenze"
    )

    """ secondo la sezione DettaglioPagamento della Fattura Elettronica """

    beneficiario = models.CharField(
        null=True,
        blank=True,
        max_length=200,
        help_text="beneficiario del pagamento se diverso dal cedente",
    )

    data_riferimento_termini_pagamento = models.DateField(
        null=True,
        blank=True,
        help_text="data dalla quale decorrono i termini di pagamento",
    )

    giorni_termini_pagamento = models.IntegerField(
        null=True,
        blank=True,
        validators=[MinValueValidator(0)],
        help_text="""termini di pagamento espressi in giorni
            a partire dalla data di riferimento termini pagamento""",
    )

    cod_ufficio_postale = models.CharField(
        null=True,
        blank=True,
        max_length=20,
        help_text="""Nei casi di modalità di pagamento
            in cui ha senso l'indicazione dell'ufficio postale""",
    )

    nome_quietanzante = models.CharField(
        null=True,
        blank=True,
        max_length=60,
        help_text="Nel caso di pagamento con contanti presso Tesoreria",
    )

    cognome_quietanzante = models.CharField(
        null=True,
        blank=True,
        max_length=60,
        help_text="Nel caso di pagamento con contanti presso Tesoreria",
    )

    cf_quietanzante = models.CharField(
        null=True,
        blank=True,
        max_length=16,
        validators=[MinLengthValidator(16)],
        help_text="Nel caso di pagamento con contanti presso Tesoreria",
    )

    titolo_quietanzante = models.CharField(
        null=True,
        blank=True,
        max_length=20,
        validators=[MinLengthValidator(2)],
        help_text="Nel caso di pagamento con contanti presso Tesoreria",
    )

    istituto_finanziario = models.CharField(
        null=True,
        blank=True,
        max_length=80,
        help_text="nome della banca o istituto finanziario",
    )

    iban = IBANField(
        null=True,
        blank=True,
        include_countries=IBAN_SEPA_COUNTRIES,
        verbose_name="IBAN",
        help_text="coordinata bancaria internazionale",
    )

    abi = models.CharField(
        null=True,
        blank=True,
        max_length=5,
        validators=[MinLengthValidator(5)],
        verbose_name="ABI",
        help_text="codice ABI",
    )

    cab = models.CharField(
        null=True,
        blank=True,
        max_length=5,
        validators=[MinLengthValidator(5)],
        verbose_name="CAB",
        help_text="codice CAB",
    )

    bic = BICField(blank=True, null=True, verbose_name="BIC", help_text="codice BIC")

    sconto_pagamento_anticipato = models.DecimalField(
        null=True,
        blank=True,
        max_digits=15,
        decimal_places=2,
        help_text="Ammontare dello sconto per pagamento anticipato",
    )

    data_limite_pagamento_anticipato = models.DateField(
        null=True,
        blank=True,
        help_text="Data limite stabilita per il pagamento anticipato",
    )

    penalita_pagamenti_ritardati = models.DecimalField(
        null=True,
        blank=True,
        max_digits=15,
        decimal_places=2,
        help_text="Ammontare della penalità dovuta per pagamenti ritardati",
    )

    data_decorrenza_penale = models.DateField(
        blank=True, null=True, help_text="Data di decorrenza della penale"
    )

    codice_pagamento = models.CharField(
        blank=True,
        null=True,
        max_length=60,
        help_text="Codice per la riconciliazione degli incassi da parte del cedente",
    )

    def __str__(self):
        return "scadenza {0} #{1} il {2} - {3} €".format(
            self.docfisc.codice_documento.codice,
            self.docfisc.numero,
            self.data,
            self.importo,
        )

    class Meta:
        verbose_name = "Dettagli scadenza documento fiscale"
        verbose_name_plural = "Dettagli scandenze documento fiscale"
