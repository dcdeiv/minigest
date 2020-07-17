from rest_framework import viewsets

from minigest.tributi.serializers import IvaAliquotaSerializer
from minigest.tributi.models import IvaAliquota as ia


class IvaAliquota(viewsets.ModelViewSet):
    queryset = ia.objects.all().order_by("-data")
    serializer_class = IvaAliquotaSerializer
