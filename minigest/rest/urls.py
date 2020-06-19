from django.urls import include, path

from rest_framework_nested import routers

from minigest.rest import viewsets as vs

""" DefaultRouter """
router = routers.DefaultRouter()


""" anagrafica """
router.register(r"utenti", vs.Utente)
router.register(r"soggetti-fiscali", vs.SoggettoFiscale)
router.register(r"persone-fisiche", vs.PersonaFisica)
router.register(r"imprese", vs.Impresa)
router.register(r"tributi/iva/aliquote", vs.IvaAliquota)


""" fisco """
router.register(r"fisco/regime-fiscale", vs.RegimeFiscale)
router.register(r"fisco/interessi-legali", vs.InteressiLegali)
router.register(r"fisco/tur", vs.TassoUfficialeRiferimento)


""" imprese """
imprese = routers.NestedDefaultRouter(router, r"imprese", lookup="impresa")
imprese.register(r"negozi", vs.Negozio, basename="impresa-negozi")


""" negozio """
negozio = routers.NestedDefaultRouter(imprese, r"negozi", lookup="negozio")
negozio.register(r"orari", vs.Orario, basename="negozio-orari")
negozio.register(
    r"orari-varianti", vs.OrarioVariante, basename="negozio-orari-varianti"
)
negozio.register(r"sede", vs.SedeNegozio, basename="negozio-sede")
negozio.register(r"casse", vs.Cassa, basename="negozio-casse")

""" negozio-cassa """
casse = routers.NestedDefaultRouter(negozio, r"casse", lookup="cassa")
casse.register(r"fondo", vs.FondoCassa, basename="casse-fondo")
casse.register(r"incassi", vs.Incasso, basename="casse-incassi")
casse.register(
    r"chiusure-fiscali", vs.ChiusuraFiscale, basename="casse-chiusure-fiscali"
)

""" chiusure fiscali """
chiusure_fiscali = routers.NestedDefaultRouter(
    casse, r"chiusure-fiscali", lookup="chiusura"
)
chiusure_fiscali.register(
    r"reparti-iva", vs.ChiusuraFiscaleRepartoIva, basename="chiusura-reparti-iva"
)


""" docfisc """
router.register(r"docfisc/codici", vs.CodiceDocumentoFiscale)
router.register(r"docfisc/condizioni-pagamento", vs.CondizionePagamento)
router.register(r"docfisc/modalita-pagamento", vs.ModalitàPagamento)
router.register(r"docfisc/natura-operazioni", vs.NaturaOperazioneIVA)
docfisc = routers.NestedDefaultRouter(router, r"imprese", lookup="impresa")


""" docfisc vendita """
docfisc.register(r"docfisc/vendita", vs.DocumentoFiscaleVendita, basename="impresa-dfv")
dfvendita = routers.NestedDefaultRouter(docfisc, r"docfisc/vendita", lookup="docfisc")
dfvendita.register(
    r"riepiloghi-iva", vs.DocumentoFiscaleRiepilogoIVA, basename="dfv-riepiloghi-iva"
)
dfvendita.register(r"pagamenti", vs.DocumentoFiscalePagamento, basename="dfv-pagamenti")
dfvendita.register(r"scadenze", vs.DocumentoFiscaleScadenza, basename="dfv-scadenze")

""" docfisc acquisti """
docfisc.register(
    r"docfisc/acquisti", vs.DocumentoFiscaleAcquisto, basename="impresa-dfa"
)
dfacquisti = routers.NestedDefaultRouter(docfisc, r"docfisc/acquisti", lookup="docfisc")
dfacquisti.register(
    r"riepiloghi-iva", vs.DocumentoFiscaleRiepilogoIVA, basename="dfa-riepiloghi-iva"
)
dfacquisti.register(
    r"pagamenti", vs.DocumentoFiscalePagamento, basename="dfa-pagamenti"
)
dfacquisti.register(r"scadenze", vs.DocumentoFiscaleScadenza, basename="dfa-scadenze")


""" non-router patterns """
urlpatterns = [
    path("auth/", include("rest_framework.urls"), name="api-auth"),
]

""" tributi patterns """
urlpatterns += [
    path("tributi/iva/aliquote/q/", vs.IvaAliquotaData.as_view()),
    path("tributi/iva/aliquote/q/<str:data>/", vs.IvaAliquotaData.as_view()),
]

""" corrispettivi """
urlpatterns += [
    path(
        "imprese/<int:impresa>/negozi/<int:negozio>/corrispettivi/",
        vs.Corrispettivi.as_view(),
    ),
    path(
        "imprese/<int:impresa>/negozi/<int:negozio>/corrispettivi/<str:data>/",
        vs.Corrispettivi.as_view(),
    ),
]

""" fatturato """
urlpatterns += [
    path("imprese/<int:impresa>/fatturato/", vs.Fatturato.as_view(),),
    path("imprese/<int:impresa>/fatturato/<str:data>/", vs.Fatturato.as_view(),),
]

""" bilancio """
urlpatterns += [
    path("imprese/<int:impresa>/bilancio/", vs.Bilancio.as_view(),),
    path("imprese/<int:impresa>/bilancio/<str:data>/", vs.Bilancio.as_view(),),
]

""" router patterns """
urlpatterns += [
    path("", include(router.urls)),
    path("", include(imprese.urls)),
    path("", include(negozio.urls)),
    path("", include(casse.urls)),
    path("", include(chiusure_fiscali.urls)),
    path("", include(docfisc.urls)),
    path("", include(dfacquisti.urls)),
    path("", include(dfvendita.urls)),
]
