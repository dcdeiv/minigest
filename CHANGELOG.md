## 0.2.0 (2020-07-16)

### Feat

- **minigest**: aggiorna www
- **www**: aggiunge la sezione RegimeFiscale e aggiusta le api
- **docs**: aggiunge le fixtures
- **ui**: aggiunge AppSection, AppHeader, AppSectionNested
- **www**: completa la sezione Tur
- **www**: completa la sezione degli interessi legali
- **www**: aggiunge la tabella dei risultati in InteressiLegali, RegimeFiscale e Tur
- **www**: inizializza le route di Fisco: InteressiLegali, Tur, RegimeFiscale
- **ui**: aggiunge react-intl, ListaVuota, LoadingSpinner, Percentuale, TableCellIcon
- **ui**: aggiunge FabFixed e FabFixedContainer
- **ui**: aggiunge ConfirmDelete
- **www**: aggiunge lo state per interessi legali, tasso ufficiale di riferimento e regime fiscale
- **minigest**: aggiunge l'app fisco e common
- **docs**: completa la sezione docker e inizializza Utilizzo
- **docs**: inizializza la documentazione e aggiunge la guida installazione pypi
- **ui**: aggiunge CodeBlock

### Fix

- **ui**: aggiusta l'overflow del content di Layout
- **www**: aggiusta le azioni
- **ui**: aggiusta gli import
- **ui**: elimina FabFixedContainer spostando la configurazione in AppContent
- **www**: aggiusta l'import a pwChange
- **minigest**: aggiusta l'import della viewset Utente
- **minigest**: migliora gli import
- **ui**: aggiunge la possibilità di cambiare l'azione secondaria della toolbar

## 0.1.0 (2020-07-14)

### Feat

- **minigest**: aggiorna www
- **minigest**: aggiorna www
- **minigest**: aggiunge API endpoint per cambiare password
- **www**: aggiunge il form email e password
- **minigest**: aggiunge i campi read-only
- **www**: aggiunge le azioni per modificare le informazioni dell'utente
- **www**: aggiunge  FormInfo
- **ui**: aggiunge Table
- **ui**: aggiunge AppHeader e AppContent
- **minigest**: aggiunge django-cors-headers
- **www**: aggiunge il componente LoadingApp per bloccare l'accesso all'applicazione quando non si è loggati
- **ui**: aggiunge LoadingApp
- **www**: inizializza il router interno ad App e aggiunge Home
- **ui**: aggiunge Link e ListItemLink
- **ui**: aggiunge MessageBox e aggiusta NotFound
- **www**: aggiunge Accedi, aggiusta gli import
- **ui**: aggiunge Splash
- **www**: aggiunge il redirect a esci
- **www**: aggiunge redux
- **www**: inizializza il router
- **www**: inizializza il drawer
- **www**: aggiunge Layout
- **ui**: aggiunge Layout
- **minigest**: aggiorna www
- **minigest**: aggiorna www
- **webapp**: aggiuge l'url a www
- **minigest**: aggiunge www
- **www**: aggiunge lo script per collecare il client al backend
- **helpers**: aggiunge defaultTheme
- **helpers**: inizializza il pacchetto helpers
- **minigest**: inizializza l'applicazione rest con le viewsets del modello Utente
- **minigest**: aggiunge l'applicazione account

### Fix

- **www**: completa la sezione del profilo
- **minigest**: traduce le risposte dal server
- **www**: completa la sezione del cambio password, manca il feedback dal server
- **www**: aggiusta l'azione put
- **webapp**: aggiunge le impostazioni di rest_framework
- **minigest**: aggiunge i redirect ad accedi
- **minigest**: aggiorna il client www
- **www**: aggiunge le schede delle informazioni personali e di accesso
- **ui**: cambia l'header in Profilo/Scheda
- **www**: aggiunge il divider nel drawer
- **www**: aggiusta le route, il rendering di App, rinomina Home in Dashboard, inizializza Profilo
- **ui**: aggiusta il rendering di children in Layout
- **ui**: rimuove AdapterLink e ListItemLink perché non funzionano se importati
- **ui**: aggiusta l'import
- **ui**: migliora NotFound
- **ui**: aggiusta il layout
- **ui**: completa il componente Layout
- cambia defaltTheme in theme
- **www**: aggiorna l'import di defaultTheme
- **ui**: sposta defaultTheme da core a ui
- **rest**: rimuove il campo impresa
- **webapp**: aggiunge gli url alle api
- **www**: aggiusta il tema
- aggiusta la dipendenza @material-ui/core
- **helpers**: rimuove @material-ui/core
- **webapp**: introduce le variabili ambientali

### Refactor

- **ui**: inizializza il pacchetto
- **core**: rinomina il pacchetto
- **www**: elimina la cartella node_modules
- **www**: cerca di installare @minigest/helpers ma c'è un problema con yarn
- **www**: elimina i file inutilizzati e inizializza App
- **www**: aggiorna index.html
- **www**: rimuove i file statici inutilizzati
- **www**: inizializza il progetto www
- **webapp**: installa minigest.account.Utente
- resetta tutti i tag
- **webapp**: sopprime l'errore E501
- **webapp**: reinizializza il progetto django
- **poetry**: aggiunge django
- **root**: aggiorna pre-commit
- **root**: reinizializza il progetto
