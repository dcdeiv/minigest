from datetime import date

from rest_framework import views
from rest_framework.response import Response

from minigest.negozi.models import Negozio
from minigest.rest.serializers import CorrispettiviSerializer


class Corrispettivi(views.APIView):
    def get(self, request, *args, **kwargs):

        negozio = Negozio.objects.get(pk=kwargs["negozio"])

        periodo = date.today().strftime("%Y-%m")

        if "data" in kwargs:
            periodo = kwargs["data"]

        data = {
            "periodo": periodo,
            "riepilogo": negozio.riepilogo(periodo),
            "riepilogo_reparti": negozio.riepilogo_reparti(periodo),
            **negozio.corrispettivi(periodo),
        }
        results = CorrispettiviSerializer(data, many=False).data

        return Response(results)
