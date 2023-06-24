from rest_framework import viewsets

from partners.api import serializers
from partners import models


class PartnersViewSet(viewsets.ModelViewSet):
    queryset = models.Partners.objects.all()
    serializer_class = serializers.PartnersSerializer

class ViabilityViewSet(viewsets.ModelViewSet):
    queryset = models.Viability.objects.all()
    serializer_class = serializers.ViabilitySerializer

class ViabilityResultViewSet(viewsets.ModelViewSet):
    queryset = models.ViabilityResult.objects.all()
    serializer_class = serializers.ViabilityResultSerializer