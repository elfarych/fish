from django.contrib import admin

from . import models


@admin.register(models.Wallet)
class WalletAdmin(admin.ModelAdmin):
    list_display = ('address', 'bnb_balance', 'eth_balance', 'bnb_busd_balance', 'bnb_usdt_balance', 'eth_usdt_balance',
                    'eth_usdc_balance',  'date')
    search_fields = ('address',)
    
