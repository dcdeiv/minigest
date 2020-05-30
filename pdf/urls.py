from django.urls import include, path

from . import views as v

""" registro dei corrispettivi """
corrispettivi = [
    path(
        "imprese/<int:impresa>/negozi/<int:negozio>/corrispettivi/",
        v.RegistroCorrispettiviPdf.as_view(),
        name="registro-corrispettivi",
    ),
    path(
        "imprese/<int:impresa>/negozi/<int:negozio>/corrispettivi/<str:data>/",
        v.RegistroCorrispettiviPdf.as_view(),
        name="registro-corrispettivi-data",
    ),
]

""" documenti fiscali """
docfisc = [
    path(
        "imprese/<int:impresa>/docfisc/<str:ciclo>/",
        v.DocumentoFiscalePdf.as_view(),
        name="docfisc",
    ),
    path(
        "imprese/<int:impresa>/docfisc/<str:ciclo>/<str:data/",
        v.DocumentoFiscalePdf.as_view(),
        name="docfisc-data",
    ),
    path(
        "imprese/<int:impresa>/docfisc/ricevuti/<str:ciclo>/",
        v.DocumentoFiscaleRicPdf.as_view(),
        name="docfisc-ric",
    ),
    path(
        "imprese/<int:impresa>/docfisc/ricevuti/<str:ciclo>/<str:data/",
        v.DocumentoFiscaleRicPdf.as_view(),
        name="docfisc-ric-data",
    ),
]


""" urlpatterns """
urlpatterns = [
    path("", include(corrispettivi)),
    path("", include(docfisc)),
]
