from .models import AutomobileVO, Technician, Appointment, Status
from django.http import JsonResponse
from .encoders import AppointmentListEncoder, TechnicianListEncoder
import json
from django.views.decorators.http import require_http_methods


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianListEncoder,
        )

    else:
        content = json.loads(request.body)
        technician = Technician(
            first_name=content["first_name"],
            last_name=content["last_name"],
            employee_id=content["employee_id"],
        )
        technician.save()

        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianListEncoder,
        )


@require_http_methods(["DELETE"])
def api_delete_technician(request, id):
    if request.method == "DELETE":
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
        )

    else:
        content = json.loads(request.body)

        # try:
        #     vin = AutomobileVO.objects.get(vin=content["vin"])
        #     content["vin"] = vin

        # except AutomobileVO.DoesNotExist:
        #     return JsonResponse(
        #         {"message": "Invalid vin id"},
        #         status=400,
        #     )

        try:
            technician = Technician.objects.get(
                employee_id=content["technician"]
            )
            content["technician"] = technician

        except Technician.DoesNotExist:
            return JsonResponse({"message": "Invalid employee id"}, status=404)

        try:
            status = Status.objects.get(name="SUBMITTED")

        except Status.DoesNotExist:
            status = Status(name="SUBMITTED")
            status.save()

        content["status"] = status

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_appointment(request, id):
    if request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["PUT"])
def api_finish_appointment(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
        appointment.finish()

    except Appointment.DoesNotExist:
        return JsonResponse(
            {"message": "appointment does not exist"},
            status=404,
        )

    return JsonResponse(
        {'message': 'Your appointment has been completed.'}
    )


@require_http_methods(["PUT"])
def api_cancel_appointment(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
        appointment.cancel()

    except Appointment.DoesNotExist:
        return JsonResponse(
            {"message": "appointment does not exist"},
            status=404,
        )

    return JsonResponse(
        {'message': 'Your appointment has been canceled.'}
    )
