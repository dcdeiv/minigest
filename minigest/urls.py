from django.urls import include, path, re_path

from django.contrib import admin

urlpatterns = [
    path("admin/", admin.site.urls,),
    path("api/", include("rest.urls")),
    path("pdf/", include("pdf.urls")),
    re_path(r"", include("webclient.urls")),
]
