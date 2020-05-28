from django.conf.urls import include
from django.urls import path

from rest_framework import routers

from .viewsets import IvaAliquotaDataViewSet, IvaAliquotaViewSet

""" routers """

# IVA
iva_router = routers.DefaultRouter()
iva_router.register(r"aliquote", IvaAliquotaViewSet)


""" urlpatterns """

iva_urlpatterns = [
    path("aliquote/q/", IvaAliquotaDataViewSet.as_view()),
    path("aliquote/q/<str:data>/", IvaAliquotaDataViewSet.as_view()),
    path("", include(iva_router.urls)),
]


""" default urlpatterns """

urlpatterns = [path("iva/", include(iva_urlpatterns))]
