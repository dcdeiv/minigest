from .docfisc import DocumentoFiscalePdf, DocumentoFiscaleView
from .pagamenti import DocFiscPagamentoPdf, DocFiscPagamentoView
from .ricevuti import DocumentoFiscaleRicPdf, DocumentoFiscaleRicView

__all__ = [
    "DocumentoFiscaleView",
    "DocumentoFiscaleRicView",
    "DocumentoFiscalePdf",
    "DocumentoFiscaleRicPdf",
    "DocFiscPagamentoPdf",
    "DocFiscPagamentoView",
]
