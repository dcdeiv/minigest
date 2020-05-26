from django.urls import include, path

urlpatterns = [
    path("auth/", include("rest_framework.urls"), name="api-auth"),
    path("tributi/", include("minigest.tributi.urls_api"), name="tributi"),
]
