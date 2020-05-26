PersonaFisica
=============
Descrizione del modello **PersonaFisica**


Chi è una Persona Fisica
*************************

Una persona fisica è quel soggetto fiscale che non è in possesso di **PARTITA IVA**, quindi tutte quelle persone fisiche che non sono giuridiche e che sono in possesso solamente del **CODICE FISCALE** per essere identificati a fini fiscali.


Dettagli
********

:UTENTE: [None] si può collegare ad un Utente salvato nell'omonimo modello. Ma se l'Utente si cancella, questo modello viene protetto e il campo si imposta su None. Questo modello non può essere cancellato per esentuali collegamenti con documenti fiscali.

:TITOLO: [None] È il *titolo onorifico* della persona fisica. Questo campo non è obbligatorio e può essere ignorato.

:COGNOME: [richiesto] il cognome della persona fisica.

:NOME: [richiesto] il nome della persona fisica.

:CODICE_FISCALE: [None] l'identificativo fiscale della persona fisica. Questo campo può essere ignorato per tutte quelle persone fisiche che non sono residenti in Italia e che quindi non hanno un codice fiscale.

:CODICE_DESTINATARIO: [None, (0000000|XXXXXXX)] il codice destinatario per la ricezione delle fatture elettroniche. La maggior parte delle persone fisiche non possiedono un **codice destinatario** ma questo campo è richiesto per l'emissione della fattura elettronica. Se il soggetto non possiede un codice destinatario, riempire il campo con il simbolo 0 [0000000], se il soggetto non è residente in Italia, riempire il campo con il simbolo X [XXXXXXX].

:EMAIL: [None] l'email del soggetto. Campo non obbligatorio.

:TELEFONO: [None] il telefono del soggetto. Campo non obbligatorio.

:FAX: [None] il fax del soggetto. Campo non obbligatorio.


Proprietà e Medoti
******************

:RESIDENZA: ritorna l'oggetto **DomicilioFiscale** vedi la sezione `DomicilioFiscale <./domicilio.rst>`_

:PAGAMENTI: [parametri: dal(data=None), al(data=None)] ritorna il riepilogo dei pagamenti. Se non viene specificato un periodo, seleziona tutto!
