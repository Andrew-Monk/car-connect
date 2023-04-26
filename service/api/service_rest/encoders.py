from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment


class AutomolbileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href",
    ]


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "customer_name",
        "date_time",
        "reason",
        "vin",
        "technician",
        "id",
    ]
    encoders = {
        "vin": AutomolbileVOEncoder(),
        "technician": TechnicianListEncoder()
    }

    def get_extra_data(self, o):
        if o.status:
            return {"status": o.status.name}
        else:
            return {"status": None}
