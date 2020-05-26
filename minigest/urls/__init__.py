from django.urls import include, path

from django.contrib import admin

urlpatterns = [
    path("admin/", admin.site.urls, name="admin"),
    path("api/", include("minigest.urls.api"), name="api"),
]
