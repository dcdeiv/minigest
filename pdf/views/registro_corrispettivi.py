from datetime import date

from django.views.generic import TemplateView

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
        return context
