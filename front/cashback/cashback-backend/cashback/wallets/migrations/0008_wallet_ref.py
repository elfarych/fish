# Generated by Django 4.0.5 on 2022-07-12 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wallets', '0007_transaction_transactionbnb'),
    ]

    operations = [
        migrations.AddField(
            model_name='wallet',
            name='ref',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
