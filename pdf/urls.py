from django.urls import path

from . import views as v

urlpatterns = [
    path(
        "imprese/<int:impresa>/negozi/<int:negozio>/corrispettivi/",
        v.RegistroCorrispettiviView.as_view(),
        name="registro-corrispettivi",
    ),
    path(
        "imprese/<int:impresa>/negozi/<int:negozio>/corrispettivi/<str:data>/",
        v.RegistroCorrispettiviView.as_view(),
        name="registro-corrispettivi",
    ),
]
