# Generated by Django 4.0.3 on 2023-04-25 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_automobilevo_import_href'),
    ]

    operations = [
        migrations.AddField(
            model_name='sale',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=10, null=True),
        ),
    ]
