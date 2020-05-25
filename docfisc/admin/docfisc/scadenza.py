from django.contrib import admin

from ...models import DocFiscScadenza


class DocFiscScadenzaInline(admin.StackedInline):
    model = DocFiscScadenza
    extra = 0
    verbose_name = "Scadenza"
    verbose_name_plural = "Scadenze"

    fieldsets = (
        (
            None,
            {
                "fields": ("beneficiario", ("data", "importo"), "modalita_pagamento"),
            },  # noqa E231
        ),
        (
            "Riferimento termini di pagamento",
            {
                "classes": ("collapse",),
                "fields": (
                    ("data_riferimento_termini_pagamento", "giorni_termini_pagamento",),
                ),
            },
        ),
        (
            "Riferimento bollettino postale",
            {
                "classes": ("collapse",),
                "fields": ("cod_ufficio_postale",),
            },  # noqa E231
        ),
        (
            "Riferimento pagamento contanti presso Tesoreria",
            {
                "classes": ("collapse",),
                "fields": (
                    (
                        "titolo_quietanzante",
                        "cognome_quietanzante",
                        "nome_quietanzante",
                    ),
                    "cf_quietanzante",
                ),
            },
        ),
        (
            "Riferimento pagamento SEPA o bonifico",
            {
                "classes": ("collapse",),
                "fields": ("istituto_finanziario", "iban", ("abi", "cab", "bic",),),
            },
        ),
        (
            "Dettagli pagamento anticipato",
            {
                "classes": ("collapse",),
                "fields": (
                    (
                        "sconto_pagamento_anticipato",
                        "data_limite_pagamento_anticipato",
                    ),
                ),
            },
        ),
        (
            "Dettagli penale",
            {
                "classes": ("collapse",),
                "fields": (
                    ("penalita_pagamenti_ritardati", "data_decorrenza_penale",),
                ),
            },
        ),
        ("Incasso", {"classes": ("collapse",), "fields": ("codice_pagamento",)}),
    )
