from django.db import models

from django.db import models
# from uuid import uuid4

class Partners(models.Model):
    # id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    id = models.AutoField(primary_key=True)
    nome_parceiro = models.CharField(max_length=100)
    endereco_parceiro = models.CharField(max_length=255)
    cnpj_parceiro = models.CharField(max_length=100)
    # cnpj_parceiro = models.IntegerField()
    uf_cobertura = models.CharField(max_length=100)

class Viability(models.Model):
    id = models.AutoField(primary_key=True)
    logradouro = models.CharField(max_length=100)
    numero = models.CharField(max_length=100)
    bairro = models.CharField(max_length=100)
    cidade = models.CharField(max_length=100)
    uf = models.CharField(max_length=100)
    produto = models.CharField(max_length=100)
    velocidade = models.CharField(max_length=100)

class ViabilityResult(models.Model):
    id = models.AutoField(primary_key=True)
    id_viabilidade = models.ForeignKey(Viability, on_delete=models.CASCADE)
    id_parceiro_resposta = models.OneToOneField(Partners, on_delete=models.CASCADE)
    resultado_parceiro = models.CharField(max_length=50)
