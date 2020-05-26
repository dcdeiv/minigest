Anagrafica
==========

Documentazione dell'app **anagrafica**!

AnagraficaConfig::

    name = minigest.anagrafica
    label = anagrafica

L'app è installata utilizzando la stringa in `name`

settings.py::

    APPLICATIONS = [
      ...
      minigest.anagrafica
    ]


Per far riferimento a un qualsiasi modello in anagrafica invece bisogna utilizzare la dicitura `label`

esempio::

    utente = models.ForeignKey(to="anagrafica.SoggettoFiscale")


.. toctree::
   :maxdepth: 2
   :caption: Modelli:

   modelli/utente
   modelli/soggetto_fiscale
   modelli/persona_fisica
   modelli/impresa
   modelli/domicilio
