SoggettoFiscale
===============
Descrizione del modello **SoggettoFiscale**


Panoramica
**********

Il modello **SoggettoFiscale** è un modello *polimorfico* che descrive tutti quei soggetti fiscali a cui viene indirizzata una fattura elettronica, un documento commerciale o fiscale qualsiasi, o un acquisto online, pertanto segue tutte le indicazioni per poter descrivere il soggetto fiscale cedente o committente di una fattura elettronica.

Il modello **SoggettoFiscale** contiene tutti i campi comuni agli altri soggetti fiscali di cui vedremo nel dettaglio in seguito.

Proprietà e Metodi
******************

:PAGAMENTI: [parametri: dal(data=None), al(data=None)] ritorna il riepilogo dei pagamenti. se non viene specificato un periodo, seleziona tutto!


QuerySet
********

Richiamando la quesyset su Soggetto Fiscale verranno chiamati anche tutti gli altri soggetti fiscali che ineritano le caratteristiche di questo modelli


.. toctree::
   :maxdepth: 2
   :caption: Altri Soggetti Fiscali:

   persona_fisica
   impresa
