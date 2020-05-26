Domicilio
=========

Il domicilio viene descritto dai modelli **DomicilioFiscale** e **DomicilioStabileOrganizzazione**

Entrambi i modelli ineritano i loro campi dal modello astratto **IndirizzoAbstract** di seguito tutti i dettagli.

DomicilioFiscale
****************

Il domicilio fiscale rappresenta la **residenza** se il soggetto è una persona fisica oppure la **sede** se il soggetto è un'impresa.

DomicilioStabileOrganizzazione
******************************

Il domicilio della stabile organizzazione rappresenta la **sede** *italiana* della **stabile organizzazione**. Questo modello va utilizzato per tutte quelle Imprese estere con **sede** fuori dall'Italia, ma che hanno una **stabile organizzazione** quale che sia in *Italia*!


Dettagli
********

:SOGGETTO: [richiesto] si deve collegare a un soggetto fiscale. Grazie alle proprietà del modello polimorfico **SoggettoFiscale**, il soggetto può essere sia **Impresa** che **PersonaFisica**

:INDIRIZZO: [richiesto] è composto dal toponimo (via, viale, piazza...) e dal nome del luogo. Esempio: Viale Italia. Può contenere anche il **numero civico** ma è sconsigliato farlo.

:NUMERO_CIVICO: [None] rappresenta il numero civico dell'indirizzo e può essere qualsiasi cosa. Esepio: 1, 1/A, eccetera. Campo non richiesto.

:CAP: [None, (00000)] rappresenza il cap dell'indirizzo. Esempio 25100. Se il cap non esiste, e quindi il soggetto non è residente in Italia, questo campo va riempito col carattere 0 [00000].

:COMUNE: [None] rappresenza il comune dell'indirizzo. Esempio: Brescia. Campo non obbligatorio se il soggetto non è residente in Italia.

:PROVINCIA: [None] rappresenza il codice della provincia composto da due caratteri. Esempio BS. Campo non obbligatorio se il soggetto non è residente in Italia.

:NAZIONE: [richiesto] rappresenza il codice della nazione composto da due caratteri. Esempio IT. Campo obbligatorio.
