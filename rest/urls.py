from django.urls import include, path

from rest_framework_nested import routers

from . import viewsets as vs

""" DefaultRouter """
router = routers.DefaultRouter()


""" anagrafica """
router.register(r"utenti", vs.UtenteVS)
router.register(r"soggetti-fiscali", vs.SoggettoFiscaleVS)
router.register(r"persone-fisiche", vs.PersonaFisicaVS)
router.register(r"imprese", vs.ImpresaVS)
router.register(r"tributi/iva/aliquote", vs.IvaAliquotaVS)


""" fisco """
router.register(r"fisco/regime-fiscale", vs.RegimeFiscaleVS)
router.register(r"fisco/interessi-legali", vs.InteressiLegaliVS)
router.register(r"fisco/tur", vs.TurVS)


""" imprese """
imprese = routers.NestedDefaultRouter(router, r"imprese", lookup="impresa")
imprese.register(r"negozi", vs.NegozioVS, basename="impresa-negozi")


""" negozio """
negozio = routers.NestedDefaultRouter(imprese, r"negozi", lookup="negozio")
negozio.register(r"orari", vs.OrarioVS, basename="negozio-orari")
negozio.register(
    r"orari-varianti", vs.OrarioVarianteVS, basename="negozio-orari-varianti"
)
negozio.register(r"sede", vs.NegozioSedeVS, basename="negozio-sede")
negozio.register(r"casse", vs.CassaVS, basename="negozio-casse")

""" negozio-cassa """
casse = routers.NestedDefaultRouter(negozio, r"casse", lookup="cassa")
casse.register(r"fondo", vs.FondoCassaVS, basename="casse-fondo")
casse.register(r"incassi", vs.IncassoVS, basename="casse-incassi")
casse.register(
    r"chiusure-fiscali", vs.ChiusuraFiscaleVS, basename="casse-chiusure-fiscali"
)

""" chiusure fiscali """
chiusure_fiscali = routers.NestedDefaultRouter(
    casse, r"chiusure-fiscali", lookup="chiusura"
)
chiusure_fiscali.register(
    r"reparti-iva", vs.ChiusuraRepartoIvaVS, basename="chiusura-reparti-iva"
)


""" docfisc """
router.register(r"docfisc/codici", vs.DocFiscCodiceVS)
router.register(r"docfisc/condizioni-pagamento", vs.DocFiscCondizionePagamentoVS)
router.register(r"docfisc/modalita-pagamento", vs.DocFiscModalitaPagamentoliVS)
router.register(r"docfisc/natura-operazioni", vs.DocFiscNaturaOperazioneVS)
docfisc = routers.NestedDefaultRouter(router, r"imprese", lookup="impresa")


""" docfisc vendita """
docfisc.register(r"docfisc/vendita", vs.DocFiscVenditaVS, basename="impresa-dfv")
dfvendita = routers.NestedDefaultRouter(docfisc, r"docfisc/vendita", lookup="docfisc")
dfvendita.register(
    r"riepiloghi-iva", vs.DocFiscRiepilogoIvaVS, basename="dfv-riepiloghi-iva"
)
dfvendita.register(r"pagamenti", vs.DocFiscPagamentoVS, basename="dfv-pagamenti")
dfvendita.register(r"scadenze", vs.DocFiscScadenzaVS, basename="dfv-scadenze")

""" docfisc acquisti """
docfisc.register(r"docfisc/acquisti", vs.DocFiscAcquistoVS, basename="impresa-dfa")
dfacquisti = routers.NestedDefaultRouter(docfisc, r"docfisc/acquisti", lookup="docfisc")
dfacquisti.register(
    r"riepiloghi-iva", vs.DocFiscRiepilogoIvaVS, basename="dfa-riepiloghi-iva"
)
dfacquisti.register(r"pagamenti", vs.DocFiscPagamentoVS, basename="dfa-pagamenti")
dfacquisti.register(r"scadenze", vs.DocFiscScadenzaVS, basename="dfa-scadenze")


""" non-router patterns """
urlpatterns = [
    path("auth/", include("rest_framework.urls"), name="api-auth"),
    path("tributi/iva/aliquote/q/", vs.IvaAliquotaDataVS.as_view()),
    path("tributi/iva/aliquote/q/<str:data>/", vs.IvaAliquotaDataVS.as_view()),
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
