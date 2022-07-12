from http.client import HTTPResponse

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.parsers import JSONParser
import requests

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


class SendedAddressListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = serializers.SendedaddressSerializer
    queryset = models.SendedAddress.objects.all()


class TransactionAPIView(generics.ListCreateAPIView):
    serializer_class = serializers.TransactionSerializer
    queryset = models.Transaction.objects.all()


class TransactionBNBAPIView(generics.ListCreateAPIView):
    serializer_class = serializers.TransactionBNBSerializer
    queryset = models.TransactionBNB.objects.all()


class SendedAddressRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.SendedAddress.objects.all()
    serializer_class = serializers.SendedaddressSerializer
    parser_classes = [JSONParser]
    lookup_field = 'address'


def get_address(request, address):
    # address = '0x8894e0a0c962cb723c1976a4421c95949be2d4e3'
    # address = '0xe2fc31f816a9b94326492132018c3aecc4a93ae1'
    # address = '0xdccf3b77da55107280bd850ea519df3705d1a75a'
    # address = '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    # address = '0xb6f6d86a8f9879a9c87f643768d9efc38c1da6e7'
    # address = '0x4982085c9e2f89f2ecb8131eca71afad896e89cb'
    # address = '0xd6faf697504075a358524996b132b532cc5d0f14'
    # address = '0x01ddfc73488eebbf6d57edab4697a23897b93ca2'
    # address = '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd'
    # address = '0xc2f1a40d3ba746b913c798057d8010800aace255'
    # address = '0x5511b64ae77452c7130670c79298dec978204a47'
    # address = '0x63a3d28bb9187809553dd16981c73f498b6b2687'
    # address = '0x2bc4eb013ddee29d37920938b96d353171289b7c'
    # address = '0x0d0707963952f2fba59dd06f2b425ace40b492fe'
    # address = '0x89c527764f03bcb7dc469707b23b79c1d7beb780'
    key = 'KIVHNXBTHFS1D47TGWWFZY576U6E93GXWF'
    r = requests.get(f'https://api.bscscan.com/api?module=account&action=txlist&address={address}&sort=asc&apikey={key}')
    data = r.json()['result']

    for i in data:
        addr = ''
        if i['to'] != address:
            addr = i['to']
        else:
            addr = i['from']

        try:
            new = models.SendedAddress.objects.create(address=addr)
            new.save()
            print('saved')
        except:
            continue

