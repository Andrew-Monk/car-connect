from django.db import models

# Create your models here.


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)


class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.IntegerField(max_length=4)


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.TextField()
    phone_number = models.IntegerField(max_length=10)


class Sale(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name='sale',
        on_delete=models.CASCADE
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name='sale',
        on_delete=models.CASCADE
    )
    customer = models.ForeignKey(
        Customer,
        related_name='sale',
        on_delete=models.CASCADE,
    )
