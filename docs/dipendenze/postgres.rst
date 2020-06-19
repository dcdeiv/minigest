Postgresql
==========

Guida all'installazione e alla configurazione di Postgresql


Installazione
*************

Su **Ubuntu** si installa l'ultima versione dando i seguenti comandi:

::

    sudo apt install libpq-dev postgresql postgresql-contrib


Creazione del Database e dell'utente
************************************

Ubuntu
------

Accedere al terminale di postgresql

::

    sudo -u postgres psql


Creare il database e l'utente

.. code-block:: psql
   :linenos:

   CREATE DATABASE minigest;
   CREATE USER test WITH PASSWORD 'test';
   ALTER ROLE test SET client_encoding TO 'utf8';
   ALTER ROLE test SET default_transaction_isolation TO 'read committed';
   ALTER ROLE test SET timezone TO 'UTC';
   GRANT ALL PRIVILEGES ON DATABASE minigest TO test;
   \q

