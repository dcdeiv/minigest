from django.urls import include, path
from rest_framework_nested import routers

from minigest.rest import viewsets as vs

""" DefaultRouter """
router = routers.DefaultRouter()


""" Account """
router.register(r"utenti", vs.Utente)


""" Fisco """
router.register(r"fisco/regime-fiscale", vs.RegimeFiscale)
router.register(r"fisco/interessi-legali", vs.InteressiLegali)
router.register(r"fisco/tur", vs.TassoUfficialeRiferimento)

""" Tributi """
router.register(r"tributi/iva/aliquote", vs.IvaAliquota)


""" non-router patters """
urlpatterns = [
    path("auth/", include("rest_framework.urls"), name="api-auth"),
    path("auth/password-change/", vs.PasswordChange.as_view()),
]

""" tributi patterns """
urlpatterns += [
    path("tributi/iva/aliquote/q/", vs.IvaAliquotaData.as_view()),
    path("tributi/iva/aliquote/q/<str:data>/", vs.IvaAliquotaData.as_view()),
]

""" router patterns """
urlpatterns += [
    path("", include(router.urls)),
]
