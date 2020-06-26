## 0.16.3 (2020-06-26)

### Fix

- **webapp**: aggiunge le variabili ambientali DEBUD e PRODUCTION, rinomina MINIGEST_SECRET_KEY in SECRET_KEY

## 0.16.2 (2020-06-25)

## 0.16.1 (2020-06-25)

### Feat

- **minigest**: aggiorna il client
- **minigest**: aggiunge la cartella public

## 0.16.0 (2020-06-24)

### Fix

- **python**: elimina la cache

### Refactor

- **minigest**: ricopia tutti i file
- **node**: ignora node_modules

### Feat

- aggiunge lerna e i client
- **webapp**: reinizializza il progetto django
- **minigest**: inizializza l'applicazione
- elimina tutto

## 0.15.1 (2020-06-19)

### Fix

- **git**: testa la nuova configurazione

## 0.15.0 (2020-06-19)

### Fix

- aggiunge public che prima veniva ignorato

## 0.14.1 (2020-06-19)

### Fix

- **minigest**: aggiusta gli errori
- migliora gli scripts
- **docker**: aggiorna docker
- **docker**: modifica la configurazione
- **git**: rimuove una regola non necessaria
- **minigest**: aggiusta gli import
- **git**: non ignora la cartella packages/www/public

### Refactor

- **www**: recupera dal branch dev
- **docker**: recupera la configurazione docker
- **recupera-i-settings**: n
- **www**: recupera yarn.lock
- **www**: sposta il client nella cartella packages
- riaggiunge il client www
- **minigest**: recupera il resto delle applicazioni
- aggiunge manage.py
- **webapp**: reinizializza il progetto django
- inizializza il code refactor

## 0.14.0 (2020-06-10)

### Fix

- **minigest**: aggiusta le relazioni aziendali
- **webclient**: migliorie al reducer auth. aggiunge il reducer utente. inizializza l'utente selezionato in auth

### Feat

- **minigest**: resetta le migrazioni
- **rest**: aggiunge i campi per le relazioni tra azienda e utente
- **minigest**: aggiunge il modello RelazioneAziendale per descrivere le relazioni tra azienda e utente

## 0.13.0 (2020-06-10)

### Feat

- **webclient**: costruisce il client
- **webclient**: aggiunge il componente Splash
- **webclient**: migliora le views
- **auth**: aggiunge i reverse url per le views login e logout

### Fix

- **webclient**: migliora la gestione del login e logout
- **webclient**: aggiunge il pulsante esci
- **webclient**: modifica il baseURL per le api calls

## 0.12.1 (2020-06-05)

### Fix

- **python**: aggiusta le dipendenze

## 0.12.0 (2020-06-05)

### Feat

- **webclient**: aggiunge e completa InteressiLegali, RegimeFiscale, Tur
- **webclient**: aggiunge le azioni per interessiLegali, regimeFiscale e tur
- **webclient**: aggiunge i reducer e le costanti per InteressiLegali, Tur, e RegimeFiscale
- **webclient**: inizializza Tur, RegimeFiscale, InteressiLegali
- **webclient**: aggiunge il drawer Fisco

### Fix

- **webclient**: aggiunsta l'api endpoint per tur
- **webclient**: astrae l'endpoint
- **webclient**: sposta lo span
- **webclient**: miglioramenti vari
- **webclient**: aggiunge il divider
- **webclient**: aggiusta il drawer

## 0.11.0 (2020-06-05)

### Feat

- **webclient**: aggiunge tutte le azioni IvaAliquota e completa la sezione
- **webclient**: aggiunge ConfirmDelete
- **webclient**: aggiunge tutti i metodi per IvaAliquote
- **webclient**: aggiunge il form
- **webclient**: aggiunge MuiPickersUtilsProvider e imposta locale su it sia per moment che per intl
- **webclient**: modifica la configurazione del logger
- **webclient**: aggiunge il componente FabFixedContainer
- **webclient**: aggiunge il componente FabFixed
- **webclient**: aggiunge un form per la ricerca delle aliquote iva
- **webclient**: aggiunge IvaAliquote
- **webclient**: aggiunge ListaVuota, LoadingSpinner e Percentuale
- fa in modo che Layout possa essere riutilizzato in più route e aggiunge la possibilità di cambiare il titolo nell'AppBar
- inizializza Tributi e il Drawer per Tributi
- aggiunge il reducer per le aliquote iva e aggiunge l'azione get e init
- inizializza Auth

### Fix

- **webclient**: aggiusta le costanti REMOVE
- **webclient**: aggiunge la validazione dell'input
- **webclient**: aggiusta l'import a IvaAliquote
- **minigest**: aggiunge ordering al modello IvaAliquote
- elimina homepage e aggiusta port in start
- **rest**: modifica il serializer
- rimuove i permessi in !PRODUCTION
- aggiusta i cors headers
- **docker**: aggiusta la configurazione di docker

### Refactor

- **webclient**: sposta tutte i componenti route/pagina nella cartella App

## 0.10.0 (2020-06-03)

### Fix

- aggiusta i settings di django e modifica i file di docker
- aggiusta gli url e gli allowed_hosts
- aggiusta la configurazione axios
- aggiunge il drawer
- **webclient**: aggiunge il Layout
- **webclient**: reinizializza react

### Feat

- **docker**: inizializza docker
- installa corsheaders
- inizializza redux
- aggiunge axios
- **webclient**: aggiunge react
- **webclient**: inizializza l'app webclient

### Refactor

- sposta i reducers nella cartella reducer
- sposta NotFound nella root della cartella src
- rigenera react

## 0.8.0 (2020-05-30)

### Feat

- **rest**: aggiunge bilancio
- **rest**: aggiunge fatturato
- **rest**: migliorie. aggiunge il registro dei corrispettivi
- **pdf**: aggiunge il pdf per i pagamenti dei documenti fiscali
- **pdf**: aggiunge i pdf per i documenti fiscali: vendita, acquisto e per data ricezione sdi
- **docfisc**: aggiunge dei metodi al manager per scremare i documenti fiscali per data di ricezione SDI
- **corrispettivi**: completa il registro dei corrispettivi
- cambia database
- **pdf**: inizializza l'app e il registro dei corrispettivi. bisogna cambiare il database'
- **pdf**: aggiunge gli url di pdf
- installa pdf
- **rest**: aggiunge gli api endpoint per la lista delle aliquote iva in vigore in una data fornita
- **rest**: aggiunge i riepiloghi iva, le scadenze e i pagamenti per le fatture
- **rest**: aggiunge gli api endpoint per i i codici dei documenti fiscali
- **rest**: aggiunge gli api endpoint per le chiusure fiscali e i suoi reparti iva
- **rest**: aggiunge gli api endpoint per la sede del negozio, le casse, il fondo cassa e gli incassi
- **rest**: crea un'applicazione estera per gestire le api
- **api**: aggiunge gli endpoint per i modelli in fisco
- **api**: aggiunge gli api endpoint del domicilio fiscale e del domicilio della stabile organizzazione
- **api**: aggiunge le api endpoint per i modelli maggiori di anagrafica
- **api**: aggiunge le api per IvaAliquota
- **api**: aggiunge rest_framework

### Fix

- **resto**: aggiunge il campo periodo
- **rest**: rimuove rappresentante_fiscale in personafisica
- **settings**: aggiusta media_root e static_root
- **tributi**: aggiusta il filtro
- **negozi**: rimuove prefetch_related
- **cassa**: aggiunge il manager
- **docfisc**: aggiusta il campo saldata
- **api**: rimuove tutte le cartelle rest per spostare in un'applicazione esterna
- **anagrafica**: rende il campo regime_fiscale non obbligatorio

### Refactor

- **rest**: migliora la gestione dei moduli
- **rest**: sposta tutti i viewsets dei modelli di anagrafica nella cartella anagrafica
- aggiunge gli aggregati delle fixtures
- **api**: sposta tutti i pacchetti rest nella cartella rest

## 0.7.0 (2020-05-26)

### Feat

- **fisco**: aggiunge TassoUfficialeRiferimento

### Fix

- aggiunge %
- **fisco**: aggiunge RegimeFiscale, InteressiLegali
- **common**: aggiunge stringifylist
- **tributi**: aggiunge il calcolo del lordo

## 0.6.0 (2020-05-25)

### Refactor

- **minigest**: sposta tutte le applicazioni all'interno di minigest
- **docs**: riporta la documentazione

### Fix

- **settings**: aggiusta i settings
- **public**: aggiunge la cartella public
- **gitignore**: ignora tutto il contenuto della cartella public
- **minigest**: rigenera il progetto
- **minigest**: elimina tutto il progetto

### Feat

- aggiunge gli helpers per il calcolo dei corrispettivi

## 0.5.0 (2020-05-25)

### Feat

- **docfisc**: aggiunge app docfisc
- **dependencies**: aggiunge pydash e django-localflavor
- **tributi**: aggiunge calcolo_imposta, calcolo_imponibile in helpers.iva

## 0.4.0 (2020-05-25)

### Feat

- **negozi**: nuova app negozi

## 0.3.0 (2020-05-24)

### Feat

- **tributi**: aggiunge app tributi e modello IvaAliquota

## 0.2.0 (2020-05-23)

### Feat

- **anagrafica**: aggiunge i modelli SoggettoFiscale, Impresa e PersonaFisica
- **common**: aggiunge l'app common

## 0.1.0 (2020-05-23)

### Feat

- **anagrafica**: aggiunge il modello Utente
- **anagrafica**: inizializza l'applicazione anagrafica
- aggiunge django e inizializza il progetto

### Fix

- **db**: rinomina il database sqlite
