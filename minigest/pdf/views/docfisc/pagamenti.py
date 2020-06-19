from datetime import date

from django.conf import settings
from django.views.generic import TemplateView

from django_weasyprint import WeasyTemplateResponseMixin

from minigest.anagrafica.models import Impresa
from minigest.docfisc.models import DocFiscPagamento


class DocFiscPagamentoView(TemplateView):
    template_name = "pdf/docfisc/pagamenti.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        impresa_pk = self.kwargs["impresa"]

        periodo = date.today().strftime("%Y-%m")

        if "data" in self.kwargs:
            periodo = self.kwargs["data"]

        pagamenti = DocFiscPagamento.objects.committente(impresa_pk)
        pagamenti = pagamenti.periodo(periodo).order_by("data")

        context["periodo"] = periodo
        context["impresa"] = Impresa.objects.get(pk=impresa_pk)
        context["pagamenti"] = pagamenti
        return context


class DocFiscPagamentoPdf(WeasyTemplateResponseMixin, DocFiscPagamentoView):
    pdf_attachment = False
    pdf_stylesheets = [
        settings.STATIC_ROOT + "pdf/docfisc.css",
        settings.STATIC_ROOT + "pdf/table-striped.css",
    ]
