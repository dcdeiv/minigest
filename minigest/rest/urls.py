from django.urls import include, path

from rest_framework_nested import routers

from minigest.rest import viewsets as vs

""" DefaultRouter """
router = routers.DefaultRouter()


""" anagrafica """
router.register(r"utenti", vs.Utente)


""" non-router patterns """
urlpatterns = [
    path("auth/", include("rest_framework.urls"), name="api-auth"),
]


""" router patterns """
urlpatterns += [
    path("", include(router.urls)),
]
