from rest_framework import viewsets

from minigest.fisco.models import InteressiLegali
from rest.serializers import InteressiLegaliSerializer


class InteressiLegaliVS(viewsets.ModelViewSet):
    queryset = InteressiLegali.objects.all()
    serializer_class = InteressiLegaliSerializer
