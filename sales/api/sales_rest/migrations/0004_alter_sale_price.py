# Generated by Django 4.0.3 on 2023-04-25 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_sale_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sale',
            name='price',
            field=models.IntegerField(max_length=10, null=True),
        ),
    ]