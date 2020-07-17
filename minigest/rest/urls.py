from django.urls import include, path
from rest_framework_nested import routers

# viewsets
from minigest.account.viewsets import Utente, PasswordChange
from minigest.fisco.viewsets import RegimeFiscale
from minigest.fisco.viewsets import InteressiLegali
from minigest.fisco.viewsets import TassoUfficialeRiferimento
from minigest.tributi.viewsets import IvaAliquota
from minigest.tributi.viewsets import IvaAliquotaData

# routers
""" DefaultRouter """
router = routers.DefaultRouter()


""" Account """
router.register(r"utenti", Utente)


""" Fisco """
router.register(r"fisco/regime-fiscale", RegimeFiscale)
router.register(r"fisco/interessi-legali", InteressiLegali)
router.register(r"fisco/tur", TassoUfficialeRiferimento)

""" Tributi """
router.register(r"tributi/iva/aliquote", IvaAliquota)


""" non-router patters """
urlpatterns = [
    path("auth/", include("rest_framework.urls"), name="api-auth"),
    path("auth/password-change/", PasswordChange.as_view()),
]

""" tributi patterns """
urlpatterns += [
    path("tributi/iva/aliquote/q/", IvaAliquotaData.as_view()),
    path("tributi/iva/aliquote/q/<str:data>/", IvaAliquotaData.as_view()),
]

""" router patterns """
urlpatterns += [
    path("", include(router.urls)),
]
