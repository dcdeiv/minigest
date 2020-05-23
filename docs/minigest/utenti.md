# UTENTI

Questo modello va a sostituire integramente il modello originale User di django.

## Motivazione

Si è deciso di sovrascrivere completamente il modello User di django per poter in un futuro aggiungere nuove funzionalità al modello User senza dover cancellare completamente il database e rifare tutte le migrazioni daccapo.

Inoltre si è deciso di tradurre alcuni campi direttamente in Italiano, come per esempio first_name e last_name sono stati tradotti in cognome e nome.
