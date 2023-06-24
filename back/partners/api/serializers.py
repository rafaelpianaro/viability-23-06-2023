from rest_framework import serializers
from partners import models


class PartnersSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Partners
        fields = '__all__'