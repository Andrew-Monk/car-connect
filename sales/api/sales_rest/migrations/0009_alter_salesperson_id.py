# Generated by Django 4.0.3 on 2023-04-26 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0008_alter_sale_salesperson'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesperson',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
