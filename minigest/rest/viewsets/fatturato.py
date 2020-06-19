from datetime import date

from rest_framework import views
from rest_framework.response import Response

from minigest.anagrafica.models import Impresa
from minigest.rest.serializers import FatturatoSerializer


class Fatturato(views.APIView):
    def get(self, request, *args, **kwargs):

        impresa = Impresa.objects.get(pk=kwargs["impresa"])

        periodo = date.today().strftime("%Y-%m")

        if "data" in kwargs:
            periodo = kwargs["data"]

        data = {"periodo": periodo, **impresa.fatturato(periodo)}
        results = FatturatoSerializer(data, many=False).data

        return Response(results)
