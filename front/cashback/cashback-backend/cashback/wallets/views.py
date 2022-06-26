from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.parsers import JSONParser

from . import models
from . import serializers
from . import service


class WalletListCreateAPIView(generics.ListCreateAPIView):
    filter_backends = [DjangoFilterBackend]
    filterset_class = service.WalletFilter
    serializer_class = serializers.WalletSerializer
    queryset = models.Wallet.objects.all()


class WalletRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Wallet.objects.all()
    serializer_class = serializers.WalletSerializer
    parser_classes = [JSONParser]
    lookup_field = 'address'


