from rest_framework import serializers
from partners import models

class PartnersSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Partners
        fields = '__all__'

class ViabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Viability
        fields = '__all__'

class ViabilityResultSerializer(serializers.ModelSerializer):
    id_parceiro_resposta = PartnersSerializer(read_only=True)
    id_viabilidade = ViabilitySerializer(read_only=True)

    class Meta:
        model = models.ViabilityResult
        fields = ['id', 'id_viabilidade', 'id_parceiro_resposta', 'resultado_parceiro']