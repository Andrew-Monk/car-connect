# Generated by Django 4.0.3 on 2023-04-25 18:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_automobilevo_model'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='model',
        ),
    ]
