""" isort:skip_file """

from django.conf.urls import include
from django.urls import path

from rest_framework_nested import routers

from .viewsets import (
    DomicilioFiscaleViewSet,
    DomicilioStabileOrganizzazioneViewSet,
    UtenteViewSet,
    ImpresaViewSet,
    PersonaFisicaViewSet,
    SoggettoFiscaleViewSet,
)

""" routers """

router = routers.SimpleRouter()
router.register(r"utenti", UtenteViewSet)
router.register(r"soggetti-fiscali", SoggettoFiscaleViewSet)
router.register(r"imprese", ImpresaViewSet)
router.register(r"persone-fisiche", PersonaFisicaViewSet)

""" Residenza """
residenza_router = routers.NestedSimpleRouter(
    router, r"persone-fisiche", lookup="soggetto"
)
residenza_router.register(
    r"residenza", DomicilioFiscaleViewSet, basename="api-residenza"
)

""" Sede """
sede_router = routers.NestedSimpleRouter(router, r"imprese", lookup="soggetto")
sede_router.register(r"sede", DomicilioFiscaleViewSet, basename="api-sede")

""" Sede """
stabile_router = routers.NestedSimpleRouter(router, r"imprese", lookup="soggetto")
stabile_router.register(
    r"sede", DomicilioStabileOrganizzazioneViewSet, basename="api-stabile"
)


""" default urlpatterns """

urlpatterns = [
    path("", include(router.urls)),
    path("", include(residenza_router.urls)),
    path("", include(sede_router.urls)),
    path("", include(stabile_router.urls)),
]
