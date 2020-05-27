from django.urls import include, path

urlpatterns = [
    path("auth/", include("rest_framework.urls"), name="api-auth"),
    path("anagrafica/", include("minigest.anagrafica.urls_api"), name="api-anagrafica"),
    path("tributi/", include("minigest.tributi.urls_api"), name="api-tributi"),
]
