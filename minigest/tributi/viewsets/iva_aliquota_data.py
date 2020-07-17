from rest_framework import generics

from minigest.tributi.serializers import IvaAliquotaSerializer
from minigest.tributi.models import IvaAliquota


class IvaAliquotaData(generics.ListAPIView):
    serializer_class = IvaAliquotaSerializer

    def get_queryset(self):
        if "data" in self.kwargs:
            data = self.kwargs["data"]

            length = len(data)
            print(length)

            if length == 4:
                query = IvaAliquota.objects.anno(data)
            if length == 7:
                query = IvaAliquota.objects.mese(data)
            if length == 10:
                query = IvaAliquota.objects.data(data)
        else:
            query = IvaAliquota.objects.data()

        return query
