Python
======

Guida a come installare python e tutte le sue dipendenze

Versione
********

La versione di python che minigest utilizza è specificata nel file
**pyproject.toml** nella root del progetto!

pip, pipx, poetry
*****************

Per installare tutti i pacchetti python, vengono utilizzati:

-  pip
-  pipx
-  poetry

Installazione di Python
***********************

Ubuntu
------

::

    sudo apt-get install python3 python3-pip python3-dev \
    python3-venv python3-setuptools python3-wheel \
    python3-cffi build-essential libcairo2 \
    libpango-1.0-0 libpangocairo-1.0-0 libgdk-pixbuf2.0-0 \
    libffi-dev shared-mime-info

Window
------

Scaricare la versione specificata nel file **pyproject.toml** e
utilizzare il terminare python che viene installato

Seguire le istruzioni a `questo link <https://weasyprint.readthedocs.io/en/latest/install.html#windows>`_ per l'installazione delle dipendenze WeasyPrint

Installazione di Poetry
***********************

Potete seguire le istruzioni sul `sito
ufficiale <https://python-poetry.org/>`__

oppure potete installarlo tramite **pipx**

Ubuntu
------

::

    python3 -m pip install --user pip
    python3 -m pip install --user pipx
    python3 -m pipx ensurepath

Su ubuntu 20.04 pipx va aggiustato:

::

    ~/.local/pipx/shared/bin/pip install -I pip

Chiudere la sessione del terminale, riaprirla e poi installare poetry

::

    pipx install poetry

Configurazione di Poetry
************************

Una volta installato, configurare poetry affinché crei l'ambiente python
direttamente nel progetto:

::

    poetry config virtualenvs.in-project true

Esportare i pacchetti python
****************************

Ricordarsi di utilizzare sempre poetry nelle macchine locali per gestire
i pacchetti python. Una volta che un nuovo pacchetto python è
installato, ricordarsi di esportare le dipendenze nel file
**requirements.txt**

::

    poetry export -f requirements.txt > requirements.txt

Installare tutte le dipendenze minigest
***************************************

dare il seguente comando

::

    poetry install --no-dev

Sul computer locale installare gli hook pre-commit:

::

    pre-commit install

Svuotare la cache
*****************

Per svuotare la cache dare il seguente comando

::

    find . | grep -E "(__pycache__|\.pyc|\.pyo$)" | xargs rm -rf

