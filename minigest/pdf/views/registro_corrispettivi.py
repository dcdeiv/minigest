from datetime import date

from django.conf import settings
from django.views.generic import TemplateView

from django_weasyprint import WeasyTemplateResponseMixin

from minigest.negozi.models import Negozio


class RegistroCorrispettiviView(TemplateView):
    template_name = "pdf/registro_corrispettivi.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        negozio_pk = self.kwargs["negozio"]

        negozio = Negozio.objects.get(pk=negozio_pk)

        periodo = date.today().strftime("%Y-%m")

        if "data" in self.kwargs:
            periodo = self.kwargs["data"]

        context["periodo"] = periodo
        context["negozio"] = negozio
        context["corrispettivi"] = negozio.corrispettivi(periodo)
        context["riepilogo"] = negozio.riepilogo(periodo)
        context["reparti"] = negozio.riepilogo_reparti(periodo)
        return context


class RegistroCorrispettiviPdf(WeasyTemplateResponseMixin, RegistroCorrispettiviView):
    pdf_attachment = False
    pdf_stylesheets = [
        settings.STATIC_ROOT + "pdf/docfisc.css",
        settings.STATIC_ROOT + "pdf/table-striped.css",
    ]
