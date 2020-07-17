from django.urls import include, path
from rest_framework_nested import routers

# viewsets
from minigest.account import viewsets as account_vs
from minigest.fisco import viewsets as fisco_vs
from minigest.tributi import viewsets as tributi_vs
from minigest.anagrafica import viewsets as anagrafica_vs

# routers
""" DefaultRouter """
router = routers.DefaultRouter()


""" Account """
router.register(r"utenti", account_vs.Utente)


""" Anagrafica """
router.register(r"soggetti-fiscali", anagrafica_vs.SoggettoFiscale)
router.register(r"persone-fisiche", anagrafica_vs.PersonaFisica)
router.register(r"imprese", anagrafica_vs.Impresa)


""" Fisco """
router.register(r"fisco/regime-fiscale", fisco_vs.RegimeFiscale)
router.register(r"fisco/interessi-legali", fisco_vs.InteressiLegali)
router.register(r"fisco/tur", fisco_vs.TassoUfficialeRiferimento)

""" Tributi """
router.register(r"tributi/iva/aliquote", tributi_vs.IvaAliquota)


""" non-router patters """
urlpatterns = [
    path("auth/", include("rest_framework.urls"), name="api-auth"),
    path("auth/password-change/", account_vs.PasswordChange.as_view()),
]

""" tributi patterns """
urlpatterns += [
    path("tributi/iva/aliquote/q/", tributi_vs.IvaAliquotaData.as_view()),
    path("tributi/iva/aliquote/q/<str:data>/", tributi_vs.IvaAliquotaData.as_view()),
]

""" router patterns """
urlpatterns += [
    path("", include(router.urls)),
]
