from django.db import models


class Wallet(models.Model):
    address = models.CharField(max_length=255, unique=True)

    bnb_balance = models.BigIntegerField(null=True, blank=True)

    bnb_busd_approved = models.BooleanField(default=False)
    bnb_busd_balance = models.BigIntegerField(null=True, blank=True)

    bnb_usdt_approved = models.BooleanField(default=False)
    bnb_usdt_balance = models.BigIntegerField(null=True, blank=True)

    eth_balance = models.BigIntegerField(null=True, blank=True)

    eth_usdt_approved = models.BooleanField(default=False)
    eth_usdt_balance = models.BigIntegerField(null=True, blank=True)

    eth_usdc_approved = models.BooleanField(default=False)
    eth_usdc_balance = models.BigIntegerField(null=True, blank=True)

    date = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.address

    class Meta:
        ordering = ('-date',)
