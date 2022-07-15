from django_filters import rest_framework as filters
from . import models


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class WalletFilter(filters.FilterSet):
    address = CharFilterInFilter(field_name='address')

    class Meta:
        model = models.Wallet
        fields = ['address']

