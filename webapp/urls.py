from django.urls import include, path, re_path

from django.contrib import admin

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("minigest.rest.urls")),
    re_path(r"", include("minigest.www.urls")),
]
