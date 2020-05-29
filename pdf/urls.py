from django.urls import path

from . import views as v

urlpatterns = [
    path(
        "imprese/<int:impresa>/negozi/<int:negozio>/corrispettivi/",
        v.RegistroCorrispettiviPdf.as_view(),
        name="registro-corrispettivi",
    ),
    path(
        "imprese/<int:impresa>/negozi/<int:negozio>/corrispettivi/<str:data>/",
        v.RegistroCorrispettiviPdf.as_view(),
        name="registro-corrispettivi",
    ),
]
