from rest_framework import generics, viewsets

from ...models import IvaAliquota
from ..serializers import IvaAliquotaSerializer


class IvaAliquotaViewSet(viewsets.ModelViewSet):
    queryset = IvaAliquota.objects.all().order_by("-data")
    serializer_class = IvaAliquotaSerializer


class IvaAliquotaDataViewSet(generics.ListAPIView):
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
