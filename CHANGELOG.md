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
- **pdf**: inizializza l'app e il registro dei corrispettivi. bisogna cambiare il database
- **pdf**: aggiunge gli url di pdf
- installa pdf
- **rest**: aggiunge gli api endpoint per la lista delle aliquote iva in vigore in una data fornita
- **rest**: aggiunge i riepiloghi iva, le scadenze e i pagamenti per le fatture
- **rest**: aggiunge gli api endpoint per i codici dei documenti fiscali
- **rest**: aggiunge gli api endpoint per le chiusure fiscali e i suoi reparti iva
- **rest**: aggiunge gli api endpoint per la sede del negozio, le casse, il fondo cassa e gli incassi
- **rest**: crea un'applicazione esterna per gestire le api
- **api**: aggiunge gli endpoint per i modelli in fisco
- **api**: aggiunge gli api endpoint del domicilio fiscale e del domicilio della stabile organizzazione
- **api**: aggiunge le api endpoint per i modelli maggiori di anagrafica
- **api**: aggiunge le api per IvaAliquota
- **api**: aggiunge rest_framework

### Fix

- **rest**: aggiunge il campo periodo
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

## 0.7.0 (2020-05-25)

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
