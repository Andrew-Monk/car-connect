# Generated by Django 4.0.3 on 2023-04-26 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0010_alter_appointment_status_alter_status_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='status',
            name='name',
            field=models.CharField(max_length=10, null=True, unique=True),
        ),
    ]
