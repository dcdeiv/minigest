from rest_framework import viewsets

from minigest.tributi.models import IvaAliquota as ia
from rest.serializers import IvaAliquotaSerializer


class IvaAliquota(viewsets.ModelViewSet):
    queryset = ia.objects.all().order_by("-data")
    serializer_class = IvaAliquotaSerializer
