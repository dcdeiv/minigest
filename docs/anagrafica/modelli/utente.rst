Utente
======
Descrizione del modello **Utente**

Panoramica
**********

Il modello **Utente** va a sostituire completamente il modello **User** di **django**!

Si è scelto di agire in questo modo per poter in un futuro personalizzare ulteriorimente il modello degli utenti, magari aggiungendo altri campi, se necessario, senza creare problemi con tabelle già esistenti.

Inoltre si è deciso di utilizzare il campo **email** al posto di **username** per rendere più semplice l'iscrizione a minigest.


Utilizzo
********

Per poter far riferimento al modello **Utente** bisogna sempre e comunque importare i settings di django e chiamare la stringa apposita **AUTH_USER_MODEL**

In questo modo si evitano problemi nel caso in cui si dovesse cambiare il nome del modello.

esempio:
::

    from django.conf import settings
    from django.db import models


    class ModelloFoo(models.Model):
        utente = models.OneToOneField(
            to=settings.AUTH_USER_MODEL,
            on_delete=models.CASCADE,
        )


QuerySets
*********

Le querysets invece possono essere eseguite importando direttamente il modello

.. code-block:: bash
   :linenos:

    from minigest.anagrafica.models import Utente

    Utente.objects.all()

    <QuerySet [Utente: lamiaemail@email.com]>
