from rest_framework import viewsets

from partners.api import serializers
from partners import models


class PartnersViewSet(viewsets.ModelViewSet):

    serializer_class = serializers.PartnersSerializer
    queryset = models.Partners.objects.all()