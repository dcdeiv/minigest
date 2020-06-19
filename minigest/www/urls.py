from django.urls import path, re_path

from minigest.www import views

from django.contrib.auth.views import logout_then_login

app_name = "www"
urlpatterns = [
    path("accedi/", views.LoginView.as_view(), name="accedi"),
    path("accedi", views.LoginView.as_view(), name="accedi-fallback"),
    path("esci/", logout_then_login, name="esci"),
    path("esci", logout_then_login, name="esci-fallback"),
    re_path(r"", views.AppView.as_view(), name="app"),
]
