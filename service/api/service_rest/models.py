from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(
        max_length=17,
        unique=True,
    )
    import_href = models.CharField(
        max_length=200,
        unique=True,
        null=True
    )

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})


class Technician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    employee_id = models.PositiveIntegerField()


class Status(models.Model):
    name = models.CharField(
        max_length=10,
        unique=True,
        null=True
    )

    def __str__(self):
        return self.name


class Appointment(models.Model):

    @classmethod
    def create(cls, **kwargs):
        kwargs["status"] = Status.objects.get(name="SUBMITTED")
        appointment = cls(**kwargs)
        appointment.save()
        return appointment

    date_time = models.DateTimeField(null=True)
    reason = models.TextField()

    status = models.ForeignKey(
        Status,
        related_name="appointment",
        on_delete=models.PROTECT,
    )

    # vin = models.ForeignKey(
    #     AutomobileVO,
    #     related_name="appointment",
    #     on_delete=models.CASCADE
    # )

    vin = models.CharField(max_length=17)

    customer_name = models.CharField(max_length=100)
    is_vip = models.BooleanField(default=False)

    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.PROTECT
    )

    def finish(self):
        try:
            status = Status.objects.get(name="FINISHED")
        except Status.DoesNotExist:
            status = Status.objects.create(name="FINISHED")
        self.status = status
        self.save()

    def cancel(self):
        try:
            status = Status.objects.get(name="CANCELED")
        except Status.DoesNotExist:
            status = Status.objects.create(name="CANCELED")
        self.status = status
        self.save()

    def get_api_url(self):
        return reverse("api_list_appointments", kwargs={"id": self.id})
