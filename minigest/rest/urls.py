from django.urls import include, path
from rest_framework_nested import routers

from minigest.rest import viewsets as vs

""" DefaultRouter """
router = routers.DefaultRouter()


""" Account """
router.register(r"utenti", vs.Utente)


""" non-router patters """
urlpatterns = [
    path("auth/", include("rest_framework.urls"), name="api-auth"),
    path("auth/password-change/", vs.PasswordChange.as_view()),
]

""" router patterns """
urlpatterns += [
    path("", include(router.urls)),
]
