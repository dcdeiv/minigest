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

Minigest per ora utilizza un database sqlite. Ma è possibile, qualora si voglia, utilizzare qualsiasi altro database.

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

Le fixtures vanno caricate una per volta ed è possibile farlo dando il seguente comando nella root del progetto:

::

    python manage.py loaddata IvaAliquota

Sostituire **IvaAliquota** con una delle fixture che si vuole installare e continuare per tutte le fixtures disponibili!

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
