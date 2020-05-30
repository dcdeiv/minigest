from django.urls import include, path, re_path

from django.contrib import admin

urlpatterns = [
    re_path(r"", include("webclient.urls"), name="webclient"),
    path("admin/", admin.site.urls, name="admin"),
    path("api/", include("rest.urls"), name="api"),
    path("pdf/", include("pdf.urls"), name="pdf"),
]
