Inizia Subito!
==============

In questa sezione vi spiegherò come provare questo progetto in modo semplice e passo per passo.


Dipendenze
**********

Prima di scaricare **minigest** assicurati di aver installato tutte le dipendenze, tra cui quella più importante, ovvero `python <./dipendenze/python.rst>`_. Segui la guida al link e installa **python** e tutte le altre dipendenze del progetto.


Scarica minigest
****************

Scarica minigest da `Github <https://github.com/dcdeiv/minigest>`_ Sta a te decidere in che modo scaricarlo, tuttavia credo sia inopportuno clonare il progetto e utilizzarlo direttamente poiché potrebbero esserci degli effetti indesiderati qualora il progetto venga aggiornato. Se vuoi clonarlo, assicurati di creare un nuovo branch locale e di applicare eventuali modifiche al codice in quel branch al posto di master.


Installare minigest
*******************

Se hai seguito le istruzioni del primo paragrafo, a questo punto avrai installato python e poetry. Per installare tutte le dipendenze del progetto basta dare il seguente comando:

::

    poetry install --no-dev

Con il flag **--no-dev** si evita di installare tutte le dipendenze di sviluppo e di non occupare spazio inutilmente.

Creazione del Database
**********************

Per come Minigest è stato creato ha bisogni di un database che possa supportare le query distinct. Quindi si è scelto di utilizzare un database postgres.
Il progetto stesso ne utilizza uno chiamato test, con user test e password test. Solo per lo sviluppo!

Per installare postgres leggi le istruzioni `qui <./dipendenze/postgres.rst>`_

In ogni caso, per poter creare il database sarà necessario applicare tutte le **migrazioni** dei modelli di django!

Dare il seguente comando da terminale nella root del progetto:

::

    python manage.py migrate

Fixtures
********

Se si vuole, è possibile riempire il database con dei dati pre-impostati, come per esempio la lista di tutte le aliquote IVA e tutti gli altri codici che servono per compilare i campi della fattura elettronica.

Le fixture disponibili sono:

- IvaAliquota
- InteressiLegali
- RegimeFiscale
- TassoUfficialeRiferimento
- CodiceDocumentoFiscale
- CondizionePagamento
- ModalitaPagamento
- NaturaOperazione

Oppure per applicazione:

- docfisc
- tributi
- fisco

Puoi decidere se caricare le fixtures una per volta oppure tutte quante insieme dando il seguente comando:

::

    python manage.py loaddata IvaAliquota

Sostituire **IvaAliquota** con una o più delle fixture che si vuole installare!

Super User
**********

Per poter accedere alla sezione `admin <http://localhost:8000/admin>`_ sarà necessario creare prima di tutto un utente **super user** con privilegi di staff. Fortunatamente **django** dà la possibilità di farlo in modo molto semplice da terminale dando il seguente comando nella root del progetto:

::

    python manage.py createsuperuser

Seguire tutte le istruzioni e una volta finito sarà possibile avviare minigest!

Avvio
*****

Avviare il server di sviluppo dando il seguente comando nella root del progetto:

::

    python manage.py runserver

Aprite il browser che preferite e navigate al link che fuoriesce sul terminale. Di solito è `http://localhost:8000 <http://localhost:8000>`_


Creazione di un'Impresa
***********************

La prima impresa che si deve creare, ma non è obbligatorio farlo, è la propria impresa. Accedete alla sezione `admin <http://localhost:8000/admin>`_ Vi compariranno tutte le applicazioni del progetto con i loro modelli. Alcuni modelli non saranno presenti perché non è necessario che lo siano. Li troverete comunque nella pagina del modello che li richiede.

Cliccate su **Imprese** nella sezione **Anagrafica** e aggiungete la vostra azienda!

Sarà obbligatorio tuttavia, in questo caso, aggiungere una **sede**, potete farlo direttamente dal modulo dell'Impresa.

Creazione di un negozio
***********************

È possibile `creare un negozio <http://localhost:8000/admin/negozi/negozio/add/>`_ dalla sezione apposita in admin. Se avete un negozio potete farlo ora.

Selezionate la vostra impresa, date un nome al vostro negozio nel campo Insegna e assegnate un codice negozio che sia solo vostro. Potete per esepio utilizzare il sistema di Google Buisiness, ovvero BRAND + NUMERO PROGRESSIVO, esempio: GOOGLE1

Anche qui vi verrà richiesto di inserire la sede del vostro negozio, anche se coincide con la sede della vostra azienda!

Potete a questo punto aggiungere gli orari standard di apertura, e le varianti degli orari. Per esempio, se quest'anno il 25 dicembre chiudete, potete specificarlo lì!

Creazione di una Cassa
**********************

Sempre dallo stesso modulo negozio, potete aggiungere una cassa. Altimenti potete accedere al `modulo Cassa <http://localhost:8000/admin/negozi/cassa/add/>`_ nella sezione Negozi.

Se accedete direttamente dal modulo apposito, selezionate la cassa che avete creato prima, assegnate un codice identificativo della cassa così come avete fatto col negozio, per esempio MA. Vi servirà per distinguere le casse che avete in negozio. Se più di una potete assegnare a una MA1 e all'altra MA2 e così via. Ovviamente il codice può essere qualsiasi cosa voi vogliate.

L'ID registratore è l'ID del registratore fiscale così come assegnato dall'Agenzia delle Entrate. Potete salvarlo là così fate a meno di accedere ogni volta al sito dell'Agenzia delle Entrate e ricercarlo!

A questo punto potete compilare il modulo **fondo cassa** che serve appunto per calcolare ogni giorno, o quando volete, l'incasso! Compilate i campi inserendo il numero dei pezzi che solitamente tenete nel cassetto contanti della cassa!

Prova subito a `calcolare l'incasso <http://localhost:8000/admin/negozi/incasso/add/>`


Documenti Fiscali
*****************

Chiusura Fiscale
-------------

Andiamo ora ad `aggiungere tutti i nostri corrispettivi <http://localhost:8000/admin/docfisc/chiusurafiscale/add/>`_. Purtroppo, per ora è possibile aggiungere i corrispettivi solo manualmente! Quindi chiusure/azzeramenti fiscali in mano e compilate tutti i campi!

Selezionate la cassa da cui avete stampato la chiusura, e compilate il resto dei campi!

Aggiungete almeno un **reparto iva**! Non c'è bisogno che vi ricordiate l'Aliquota IVA in vigore per quel giorno! Se avete caricato le fixtures IvaAliquota, il gestionale calcolerà l'imposta per voi. Tutto quello che dovete ricordare è se il reparto appartiene all'IVA ORDINARIA, RIDOTTA, MINIMA o ESENTE

Fatture e altro
---------------

Aggiungiamo ora una `fattura <http://localhost:8000/admin/docfisc/documentofiscale/add/>`_

Con fattura si intende la fattura, nota di credito e altro ancora!

Potete aggiungere una fattura acquisto o una fattura di vendita. L'unica cosa che dovete ricordare è chi l'ha emessa e chi l'ha commissionata. Così se siete voi ad averla emessa sarà considerata una fattura di vendita, se invece siete voi ad averla commissionata sarà considerata una fattura acquisto!

Per ora assegnate committente e cedente alla vostra stessa azienda (come se fosse un'autofattura), oppure, se avete voglia, potete aggiungere una nuova azienda, vostra fornitrice o cliente!

Compilate il modulo come se fosse una normale fattura elettronica. Al campo **data ricezione SDI** inserite la data di ricezione da parte del sistema di intercambio! Parlate col vostro commercialista per sapere in che modo le contabilizza! A volte le contabilizzano alla data di emissione, altri alla data di invio, altri invece alla data di consegna! Basta che ricordiate queste cose o compilate quel campo di conseguenza! Quel campo verrà utilizzato per calcolare tutto il resto!

Così come per la Chiusura Fiscale, anche qua dovrete compilare separatamente il totale di ogni repart IVA. Controllate in fondo alle vostre fatture e compilate di seguito! In questo caso, però dovrete ricordarvi l'ammontare dell'aliquota IVA a cui fa riferimento il reparto! Non è possibile calcolarla automaticamente perché ci sono troppe incognite e varianti. Selezionate l'aliquota in vigora a cui fa riferimento la fattura e passate alla sezione successiva.

Potete aggiungere una o più scadenze, così come segnato sulla fattura.

Ogni volta che invece avete pagato, una o più rate, a saldo o come acconto, salvate il vostro pagamento!

Potete caricare il file xml della fattura e il file PDF della/e quientanza/e cosicché le possiate trovare più facilmente in futuro!
