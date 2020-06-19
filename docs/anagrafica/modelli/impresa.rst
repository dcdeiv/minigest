Impresa
=======
Descrizione del modello **Impresa**

Chi è un'Impresa
****************

L'Impresa rapprensenta quel soggetto fiscale, ovvero anche una persona giuridica, che è in possesso di **PARTITA IVA** nonché tutte le imprese ovvero anche aziende, ditte, società, ecc...

Dettagli
********

:DENOMINAZIONE: [richiesto] è il nome del soggetto fiscale. Esepio: I fiori di Mario Rossi. In alcuni casi può contenere anche il Nome e Cognome del soggetto con partita iva. Campo obbligatorio.

:CODICE_EORI: [None] è il codice EORI *Economic Operator Registration and Identification*

:ID_FISCALE_IVA_PAESE: [None] rappresenta il codice a due caratteri della nazione in cui la partita IVA è registrata. Se la partita IVA non è presente, questo campo può essere ignorato, altrimenti va compilato. Può anche essere compilato ugualmente seguendo poi le istruzioni del campo **ID_FISCALE_IVA_CODICE**.

:ID_FISCALE_IVA_CODICE: [None, (99999999999)] rappresenta il codice della partita IVA. Per tutti i paesi europei, compilare il campo con il loro codice, altrimenti è possibile compilare il campo con il carattere 9 (99999999999) undici volte, se il soggetto non è residente nell'Unione Europea.

:CODICE_FISCALE: [None] rappresenta il codice fiscale. Spesso è uguale alla partita IVA. Se invece è diverso (per esempio per tutte le ditte individuali) va compilato!

:REGIME_FISCALE: [None] rappresenta il codice del regime fiscale così come documentato sul sito dell'agenzia delle entrate. Fa riferimento al modello **RegimeFiscale** nell'app **fisco** `fisco.RegimeFiscale <../../fisco/modelli/regime_fiscale.rst>`_

:ALBO_PROFESSIONALE: [None] il nome dell'albo professionale. Campo non richiesto.

:ALBO_PROVINCIA: [None] il codice a due cifre dell'albo professionale a cui si è iscritti. Campo non richiesto.

:ALBO_NUMERO_ISCRIZIONE: [None] il codice che rappresenza il numero di iscrizione fornito dall'albo professionale. Campo non richiesto.

:ALBO_DATA_ISCRIZIONE: [None, YYYY-MM-DD] la data di iscrizione all'albo. Campo non richiesto.

:REA_UFFICIO: [None] il codice a due cifre della provincia dell'uficio REA a cui si è iscritti. Campo non richiesto.

:REA_NUMERO: [None] il codice REA fornito dall'ufficio. Campo non richiesto.

:CAPITALE_SOCIALE: [Nome] il capitale sociale se società. Campo non richiesto.

:SOCIO_UNICO: [(None|SU|SM)] nei casi di società per azioni a responsabilità limitata indicare il tipo di socio. Campo non richiesto.

:STATO_LIQUIDAZIONE: [(None|LS|LN)] lo stato di liquidazione. Campo non richiesto.

:RIFERIMENTO_AMMINISTRAZIONE: [None] il codice identificativo del cedente della fattura elettronica ai fini amministratico-contabili. Campo non richiesto.

:PEC: [None] l'indirizzo di posta elettronica certificata. Campo non richiesto.

:CODICE_DESTINATARIO: [(None|0000000|XXXXXXX)] il codice destinatario per la ricezione delle fatture elettroniche. La maggior parte delle persone fisiche non possiedono un **codice destinatario** ma questo campo è richiesto per l'emissione della fattura elettronica. Se il soggetto non possiede un codice destinatario, riempire il campo con il simbolo 0 [0000000], se il soggetto non è residente in Italia, riempire il campo con il simbolo X [XXXXXXX]. Se il soggetto è una **pubblica amministrazione** il codice destinatario è composto da 6 cifre e non da 7!

:EMAIL: [None] l'email del soggetto. Campo non obbligatorio.

:TELEFONO: [None] il telefono del soggetto. Campo non obbligatorio.

:FAX: [None] il fax del soggetto. Campo non obbligatorio.

Proprietà e Metodi
******************

:SEDE: ritorna l'oggetto **DomicilioFiscale** vedi `DocilioFiscale <./domicilio.rst>`_

:ID_FISCALE: ritorna una stringa con l'ID fiscale compreso di Partita IVA e Codice Fiscale o uno dei due a seconda di come è stato compilato il modello.

:FATTURATO: [parametri: dal(data=None), al(data=None)] ritorna un dict con il riepilogo del fatturato. Se non viene specificato un periodo, seleziona tutto!

:BILANCIO: [parametri: dal(data=None), al(data=None)] ritorna un dict con il riepilogo del bilancio (entrate - uscite). Se non viene specificato un periodo, seleziona tutto!

:PAGAMENTI: [parametri: dal(data=None), al(data=None)] ritorna il riepilogo dei pagamenti. Se non viene specificato un periodo, seleziona tutto!
