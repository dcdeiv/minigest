from datetime import date

from django.conf import settings
from django.views.generic import TemplateView

from django_weasyprint import WeasyTemplateResponseMixin

from minigest.anagrafica.models import Impresa


class DocumentoFiscaleView(TemplateView):
    template_name = "pdf/docfisc/docfisc.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        impresa_pk = self.kwargs["impresa"]
        ciclo = self.kwargs["ciclo"]

        periodo = date.today().strftime("%Y-%m")

        if "data" in self.kwargs:
            periodo = self.kwargs["data"]

        impresa = Impresa.objects.get(pk=impresa_pk)

        if ciclo == "vendita":
            docfisc = impresa.docfisc_vendita
        else:
            docfisc = impresa.docfisc_acquisto

        docfisc = docfisc.periodo(periodo).order_by("data")

        context["impresa"] = impresa
        context["ciclo"] = ciclo
        context["periodo"] = periodo
        context["docfisc"] = docfisc
        return context


class DocumentoFiscalePdf(WeasyTemplateResponseMixin, DocumentoFiscaleView):
    pdf_attachment = False
    pdf_stylesheets = [
        settings.STATIC_ROOT + "pdf/docfisc.css",
        settings.STATIC_ROOT + "pdf/table-striped.css",
    ]
