from django.conf import settings

from minigest.common.models.fields import UpperCaseField
from ..helpers.impresa import bilancio, fatturato
from .soggetto_fiscale import SoggettoFiscale

from django.core.validators import MinLengthValidator

from django.db import models


class Impresa(SoggettoFiscale):
    """
    Modello descrittivo di un'Impresa

    # Campi ereditati
    - CodiceFiscale 1.2.1.2
    - CodiceDestinatario 1.1.4
    - email
    - telefono
    - fax
    """

    utenti = models.ManyToManyField(
        settings.AUTH_USER_MODEL, blank=True, related_name="imprese",
    )

    # Anagrafica 1.2.1.3.1
    denominazione = models.CharField(
        null=False,
        blank=False,
        max_length=80,
        help_text="la denominazione dell'impresa o il nome e cognome",
    )

    # Anagrafica 1.2.1.3.5
    codice_eori = models.CharField(
        blank=True,
        null=True,
        default=None,
        max_length=17,
        validators=[MinLengthValidator(13)],
        help_text="Economic Operator Registration and Identification",
    )

    # IdFiscaleIVA 1.2.1.1.1
    id_fiscale_iva_paese = UpperCaseField(
        blank=True,
        null=True,
        default=None,
        max_length=2,
        validators=[MinLengthValidator(2)],
        help_text="es: IT",
        verbose_name="codice paese partita IVA",
    )

    # IdFiscaleIVA 1.2.1.1.2
    id_fiscale_iva_codice = UpperCaseField(
        blank=True,
        null=True,
        default=None,
        max_length=28,
        validators=[MinLengthValidator(1)],
        help_text="per paesi extra EU inserire 99999999999",
        verbose_name="codice partita IVA",
    )

    # CodiceFiscale 1.2.1.2
    codice_fiscale = UpperCaseField(
        null=True,
        blank=True,
        default=None,
        max_length=16,
        validators=[MinLengthValidator(11)],
        help_text="""compilare solo se diverso dalla partita IVA""",
    )

    # RegimeFiscale 1.2.1.8
    regime_fiscale = models.ForeignKey(
        null=True,
        blank=True,
        to="fisco.RegimeFiscale",
        to_field="codice",
        on_delete=models.PROTECT,
        related_name="imprese",
    )

    # AlboProfessionale 1.2.1.4
    albo_professionale = models.CharField(
        null=True,
        blank=True,
        default=None,
        max_length=60,
        help_text="nome dell'albo professionale",
    )

    # ProvinciaAlbo 1.2.1.5
    albo_provincia = UpperCaseField(
        verbose_name="Provincia Albo",
        blank=True,
        null=True,
        default=None,
        max_length=2,
        validators=[MinLengthValidator(2)],
        help_text="es: MI",
    )

    # NumeroIscrizioneAlbo 1.2.1.6
    albo_numero_iscrizione = models.CharField(
        verbose_name="Numero iscrizione Albo",
        null=True,
        blank=True,
        default=None,
        max_length=60,
        help_text="numero di iscrizione all'albo professionale",
    )

    # DataIcrizioneAlbo 1.2.1.7
    albo_data_iscrizione = models.DateField(
        verbose_name="Data di iscrizione all'Albo",
        null=True,
        blank=True,
        default=None,
        help_text="data di iscrizione all'albo professionale",
    )

    # IscrizioneREA 1.2.4.1
    rea_ufficio = UpperCaseField(
        verbose_name="Ufficio REA",
        blank=True,
        null=True,
        default=None,
        max_length=2,
        validators=[MinLengthValidator(2)],
        help_text="provincia dell'Ufficio REA, es: MI",
    )

    # IscrizioneREA 1.2.4.2
    rea_numero = models.CharField(
        verbose_name="Numero REA",
        null=True,
        blank=True,
        default=None,
        max_length=60,
        help_text="numero di iscrizione al registro delle imprese",
    )

    # IscrizioneREA 1.2.4.3
    capitale_sociale = models.DecimalField(
        null=True,
        blank=True,
        default=None,
        max_digits=15,
        decimal_places=2,
        help_text="nei casi di società di capitali",
    )

    # IscrizioneREA 1.2.4.4
    socio_unico = models.CharField(
        null=True,
        blank=True,
        default=None,
        max_length=2,
        choices=((None, None), ("SU", "socio unico"), ("SM", "più soci")),
        help_text="nei casi di società per azioni a responsabilità limitata",
    )

    # IscrizioneREA 1.2.4.5
    stato_liquidazione = models.CharField(
        null=True,
        blank=True,
        default=None,
        max_length=2,
        choices=(
            (None, None),
            ("LS", "in liquidazione"),
            ("LN", "non in liquidazione"),
        ),
        help_text="indica se la società si trova in stato di liquidazione o no",
    )

    # RiferimentoAmministrazione 1.2.6
    riferimento_amministrazione = models.DecimalField(
        null=True,
        blank=True,
        default=None,
        max_digits=20,
        decimal_places=2,
        help_text="codice identificativo del cedente ai fini amministrativo-contabili",
    )

    pec = models.EmailField(
        blank=True, null=True, max_length=256, validators=[MinLengthValidator(7)]
    )

    @property
    def sede(self):
        return self.domicilio_fiscale or None

    @property
    def id_fiscale(self):
        iva_paese = self.id_fiscale_iva_paese or None
        iva_codice = self.id_fiscale_iva_codice or None
        cf = self.codice_fiscale or None

        if iva_paese and cf:
            return "P.IVA: {0}{1} — Cod.Fisc.: {2}".format(iva_paese, iva_codice, cf)
        elif iva_paese and not cf:
            return "P.IVA e Cod.Fisc.: {0}{1}".format(iva_paese, iva_codice)
        elif cf and not iva_paese:
            return "Cod.Fisc.: {0}".format(cf)
        else:
            return "Identificativo fiscale assente"

    def fatturato(self, dal=None, al=None):
        return fatturato(self, dal, al)

    def bilancio(self, dal=None, al=None):
        return bilancio(self, dal, al)

    def __str__(self):
        return self.denominazione

    class Meta:
        verbose_name_plural = "Imprese"
