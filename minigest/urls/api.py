from django.urls import include, path

urlpatterns = [
    path("auth/", include("rest_framework.urls"), name="api-auth"),
    path(
        "anagrafica/", include("minigest.anagrafica.rest.urls"), name="api-anagrafica"
    ),
    path("tributi/", include("minigest.tributi.rest.urls"), name="api-tributi"),
    path("fisco/", include("minigest.fisco.rest.urls"), name="api-fisco"),
]
