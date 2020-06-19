from django.urls import path, re_path

from minigest.www import views

from django.contrib.auth.views import logout_then_login

app_name = "www"
urlpatterns = [
    path("accedi/", views.LoginView.as_view(), name="accedi"),
    path("esci/", logout_then_login, name="esci"),
    re_path(r"", views.CatchAllView.as_view(), name="catchall"),
]
