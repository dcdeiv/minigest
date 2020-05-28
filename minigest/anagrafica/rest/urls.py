""" isort:skip_file """

from django.conf.urls import include
from django.urls import path

from rest_framework import routers

from .viewsets import (
    UtenteViewSet,
    ImpresaViewSet,
    PersonaFisicaViewSet,
    SoggettoFiscaleViewSet,
)

""" routers """

router = routers.DefaultRouter()
router.register(r"utenti", UtenteViewSet)
router.register(r"soggetti-fiscali", SoggettoFiscaleViewSet)
router.register(r"imprese", ImpresaViewSet)
router.register(r"persone-fisiche", PersonaFisicaViewSet)


""" default urlpatterns """

urlpatterns = [
    path("", include(router.urls)),
]
