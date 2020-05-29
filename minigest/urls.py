from django.urls import include, path

from django.contrib import admin

urlpatterns = [
    path("admin/", admin.site.urls, name="admin"),
    path("api/", include("rest.urls"), name="api"),
    path("pdf/", include("pdf.urls"), name="pdf"),
]
