""" isort:skip_file """

from django.conf.urls import include
from django.urls import path

from rest_framework import routers

from minigest.fisco.rest import viewsets

""" routers """

router = routers.DefaultRouter()
router.register(r"interessi-legali", viewsets.InteressiLegaliViewSet)
router.register(r"regimi-fiscali", viewsets.RegimeFiscaleViewSet)
router.register(r"tasso-ufficiale-riferimento", viewsets.TurViewSet)


""" default urlpatterns """

urlpatterns = [
    path("", include(router.urls)),
]
