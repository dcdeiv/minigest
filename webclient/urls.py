from django.urls import re_path

from webclient import views

from django.contrib.auth.views import logout_then_login

app_name = "webclient"
urlpatterns = [
    re_path(r"^accedi/?$", views.LoginView.as_view(), name="accedi"),
    re_path(r"^esci/?$", logout_then_login, name="esci"),
    re_path(r"", views.CatchAllView.as_view(), name="catchall"),
]
