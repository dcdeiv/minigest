from django.urls import include, path

from pdf import views as v

vendita = [
    path(
        "vendita/",
        v.DocumentoFiscalePdf.as_view(),
        {"ciclo": "vendita"},
        name="docfisc-vendita",
    ),
    path(
        "vendita/<str:data/",
        v.DocumentoFiscalePdf.as_view(),
        {"ciclo": "vendita"},
        name="docfisc-vendita-data",
    ),
]

vendita_ricevuti = [
    path(
        "vendita/ricevuti/",
        v.DocumentoFiscaleRicPdf.as_view(),
        {"ciclo": "vendita"},
        name="docfisc-vendita-ric",
    ),
    path(
        "vendita/ricevuti/<str:data>/",
        v.DocumentoFiscaleRicPdf.as_view(),
        {"ciclo": "vendita"},
        name="docfisc-vendita-ric-data",
    ),
]

acquisto = [
    path(
        "acquisto/",
        v.DocumentoFiscalePdf.as_view(),
        {"ciclo": "acquisto"},
        name="docfisc-acquisto",
    ),
    path(
        "acquisto/<str:data/",
        v.DocumentoFiscalePdf.as_view(),
        {"ciclo": "acquisto"},
        name="docfisc-acquisto-data",
    ),
]

acquisto_ricevuti = [
    path(
        "acquisto/ricevuti/",
        v.DocumentoFiscaleRicPdf.as_view(),
        {"ciclo": "acquisto"},
        name="docfisc-acquisto-ric",
    ),
    path(
        "acquisto/ricevuti/<str:data>/",
        v.DocumentoFiscaleRicPdf.as_view(),
        {"ciclo": "acquisto"},
        name="docfisc-acquisto-ric-data",
    ),
]


pagamenti = [
    path("pagamenti/", v.DocFiscPagamentoPdf.as_view(), name="docfisc-pagamenti",),
    path(
        "pagamenti/<str:data/",
        v.DocFiscPagamentoPdf.as_view(),
        name="docfisc-pagamenti-data",
    ),
]


docfisc = [
    path("docfisc/", include(pagamenti)),
    path("docfisc/", include(vendita)),
    path("docfisc/", include(vendita_ricevuti)),
    path("docfisc/", include(acquisto)),
    path("docfisc/", include(acquisto_ricevuti)),
]
