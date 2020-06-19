from django.urls import path

from pdf import views as v

""" registro dei corrispettivi """
corrispettivi = [
    path(
        "negozi/<int:negozio>/corrispettivi/",
        v.RegistroCorrispettiviPdf.as_view(),
        name="registro-corrispettivi",
    ),
    path(
        "negozi/<int:negozio>/corrispettivi/<str:data>/",
        v.RegistroCorrispettiviPdf.as_view(),
        name="registro-corrispettivi-data",
    ),
]
