from django.db import models

# Create your models here.


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.IntegerField(max_length=4)
    # id = models.IntegerField(max_length=9, primary_key=True)


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.TextField()
    phone_number = models.CharField(max_length=15)


class Sale(models.Model):
    price = models.DecimalField(decimal_places=2, max_digits=10, null=True)
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

    # def price_to_str(self):
    #     return str(self.price)
