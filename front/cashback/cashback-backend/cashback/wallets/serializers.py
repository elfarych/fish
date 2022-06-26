from rest_framework import serializers
from . import models


class WalletSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Wallet
        fields = '__all__'
