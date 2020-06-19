API
===

Spiegazione e utilizzo degli API endpoint disponibili

Prima di cominciare
*******************

Tutte le stringe racchiuse in **<>** contengono delle variabili.
Pertanto è opportuno sostituire **<>** con la variabile a cui fa riferimento

esempio:
::

    api/utenti/<int:id>/

va sostituito con:
::

    api/utenti/1/



api/fisco/regime-fiscale
************************

La lista dei regimi fiscali

dettagli: :code:`api/fisco/regime-fiscale/<int:id>/`



api/fisco/interessi-legali
**************************

La lista degli interessi legali

dettagli: :code:`api/fisco/interessi-legali/<int:id>/`



api/fisco/tur
*************

La lista dei tassi ufficiali di riferimento

dettagli: :code:`api/fisco/tur/<int:id>/`



api/tributi/iva/aliquote/
*************************

La lista di tutte le aliquote IVA

dettagli: :code:`api/tributi/iva/aliquote/<int:id>/`



api/tributi/iva/aliquote/q/
*************************

La lista di tutte le aliquote IVA in vigore in una determinata data

Utilizzo
--------

:code:`api/tributi/iva/aliquote/q/`

:code:`api/tributi/iva/aliquote/q/2020/`

:code:`api/tributi/iva/aliquote/q/2020-05/`

:code:`api/tributi/iva/aliquote/q/2020-05-01/`



api/docfisc/codici/
*******************

La lista dei codici dei documenti fiscali

dettagli: :code:`api/docfisc/codici/<int:id>/`



api/docfisc/condizioni-pagamento/
*********************************

La lista dei codici delle condizioni di pagamento dei documenti fiscali

dettagli: :code:`api/docfisc/condizioni-pagamento/<int:id>/`



api/docfisc/modalita-pagamento/
*******************************

La lista dei codici delle modalità di pagamento ddei documenti fiscali

dettagli: :code:`api/docfisc/modalita-pagamento/<int:id>/`



api/docfisc/natura-operazioni/
******************************

La lista dei codici delle nature delle operazioni IVA dei documenti fiscali

dettagli: :code:`api/docfisc/natura-operazioni/<int:id>/`



api/utenti/
***********

A questo endpoint è possibile consultare la lista tutti gli utenti iscritti a minigest

dettagli: :code:`api/utenti/<int:id>/`


api/soggetti-fiscali/
*********************

A questo endpoint è possibile consultare la lista di tutti i **Soggetti Fiscali**, ovvero anche le **Imprese** e le **Persone Fisiche**

dettagli: :code:`api/soggetti-fiscali/<int:id>/`


api/persone-fisiche/
********************

A questo endpoint è possibile consultare la lista di tutte le persone fisiche

dettagli: :code:`api/persone-fisiche/<int:id>/`



api/imprese/
************

A questo endpoint è possibile consultare la lista di tutte le imprese

dettagli: :code:`api/imprese/<int:id>/`



api/imprese/<int:id>/fatturato/
*******************************

Il fatturato di una determinata impresa in un determinato periodo

Utilizzo
--------

:code:`api/imprese/<int:id>/fatturato/`

:code:`api/imprese/<int:id>/fatturato/2020/`

:code:`api/imprese/<int:id>/fatturato/2020-05/`

:code:`api/imprese/<int:id>/fatturato/2020-05-01/`



api/imprese/<int:id>/bilancio/
*******************************

Il bilancio di una determinata impresa in un determinato periodo

Utilizzo
--------

:code:`api/imprese/<int:id>/bilancio/`

:code:`api/imprese/<int:id>/bilancio/2020/`

:code:`api/imprese/<int:id>/bilancio/2020-05/`

:code:`api/imprese/<int:id>/bilancio/2020-05-01/`



api/imprese/<int:id>/negozi/
****************************

La lista di tutti i negozi di una data impresa

dettagli: :code:`api/imprese/<int:id>/negozi/<int:id>/`



api/imprese/<int:id>/negozi/<int:id>/sede/
******************************************

La sede di un dato negozio di una data impresa

dettagli: :code:`api/imprese/<int:id>/negozi/<int:id>/sede/<int:id>/`



api/imprese/<int:id>/negozi/<int:id>/orari/
*******************************************

La lista dei giorni di apertura con gli orari di un dato negozio di una data impresa

dettagli: :code:`api/imprese/<int:id>/negozi/<int:id>/orari/<int:id>/`



api/imprese/<int:id>/negozi/<int:id>/orari-varianti/
****************************************************

La lista dei giorni in cui l'apertura/chiusura e i relativi orari varia

dettagli: :code:`api/imprese/<int:id>/negozi/<int:id>/orari-varianti/<int:id>/`



api/imprese/<int:id>/negozi/<int:id>/corrispettivi/
***************************************************

Il registro dei corrispettivi di un dato negozio

dettagli: :code:`api/imprese/<int:id>/negozi/<int:id>/casse/<int:id>/`

Utilizzo
--------

:code:`api/imprese/<int:id>/negozi/<int:id>/corrispettivi/`

:code:`api/imprese/<int:id>/negozi/<int:id>/corrispettivi/2020/`

:code:`api/imprese/<int:id>/negozi/<int:id>/corrispettivi/2020-05/`

:code:`api/imprese/<int:id>/negozi/<int:id>/corrispettivi/2020-05-01/`



api/imprese/<int:id>/negozi/<int:id>/casse/
******************************************

La lista dei registratori fiscali/casse di un dato negozio di una data impresa

dettagli: :code:`api/imprese/<int:id>/negozi/<int:id>/casse/<int:id>/`




api/imprese/<int:id>/negozi/<int:id>/casse/<int:id>/fondo/
**********************************************************

Il fondo cassa di una data cassa

dettagli: :code:`api/imprese/<int:id>/negozi/<int:id>/casse/<int:id>/fondo/<int:id>/`



api/imprese/<int:id>/negozi/<int:id>/casse/<int:id>/incassi/
************************************************************

gli incassi di una data cassa

dettagli: :code:`api/imprese/<int:id>/negozi/<int:id>/casse/<int:id>/incassi/<int:id>/`



api/imprese/<int:id>/negozi/<int:id>/casse/<int:id>/chiusure-fiscali/
*********************************************************************

gli incassi di una data cassa

dettagli: :code:`api/imprese/<int:id>/negozi/<int:id>/casse/<int:id>/chiusure-fiscali/<int:id>/`



api/imprese/<int:id>/negozi/<int:id>/casse/<int:id>/chiusure-fiscali/<int:id>/reparti-iva/
******************************************************************************************

I dettagli dei reparti IVA di una data chiusura fiscale

dettagli: :code:`api/imprese/<int:id>/negozi/<int:id>/casse/<int:id>/chiusure-fiscali/<int:id>/reparti-iva/<int:id>/`



api/imprese/<int:id>/docfisc/vendita/
*************************************

La lista di tutti i documenti fiscali di vendita di una data impresa

dettagli: :code:`api/imprese/<int:id>/docfisc/vendita/<int:id>/`



api/imprese/<int:id>/docfisc/vendita/<int:id>/riepiloghi-iva/
*************************************************************

La lista di tutti i riepiloghi iva di un determinato documento fiscale di vendita

dettagli: :code:`api/imprese/<int:id>/docfisc/vendita/<int:id>/riepiloghi-iva/<int:id>/`



api/imprese/<int:id>/docfisc/vendita/<int:id>/pagamenti/
********************************************************

La lista di tutti i pagamenti di un determinato documento fiscale di vendita

dettagli: :code:`api/imprese/<int:id>/docfisc/vendita/<int:id>/pagamenti/<int:id>/`



api/imprese/<int:id>/docfisc/vendita/<int:id>/scadenze/
*******************************************************

La lista di tutte le scadenze di un determinato documento fiscale di vendita

dettagli: :code:`api/imprese/<int:id>/docfisc/vendita/<int:id>/scadenze/<int:id>/`


api/imprese/<int:id>/docfisc/acquisti/
*************************************

La lista di tutti i documenti fiscali acquisto di una data impresa

dettagli: :code:`api/imprese/<int:id>/docfisc/acquisti/<int:id>/`



api/imprese/<int:id>/docfisc/acquisti/<int:id>/riepiloghi-iva/
*************************************************************

La lista di tutti i riepiloghi iva di un determinato documento fiscale acquisto

dettagli: :code:`api/imprese/<int:id>/docfisc/acquisti/<int:id>/riepiloghi-iva/<int:id>/`



api/imprese/<int:id>/docfisc/acquisti/<int:id>/pagamenti/
********************************************************

La lista di tutti i pagamenti di un determinato documento fiscale acquisto

dettagli: :code:`api/imprese/<int:id>/docfisc/acquisti/<int:id>/pagamenti/<int:id>/`



api/imprese/<int:id>/docfisc/acquisti/<int:id>/scadenze/
*******************************************************

La lista di tutte le scadenze di un determinato documento fiscale acquisto

dettagli: :code:`api/imprese/<int:id>/docfisc/acquisti/<int:id>/scadenze/<int:id>/`
