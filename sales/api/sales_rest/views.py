from django.views.decorators.http import require_http_methods
from .models import Salesperson
import json
from django.http import JsonResponse
from common.json import ModelEncoder


class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
    ]


class SalespersonDetailEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


@require_http_methods(["GET", "POST"])
def list_salespeople(request):
    if request.method == 'GET':
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {'salespeople': salespeople},
            encoder=SalespersonListEncoder,
        )
    else:
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonDetailEncoder,
            safe=False
        )


@require_http_methods(['DELETE', 'GET', 'PUT'])
def detail_salespeople(request, pk):
    if request.method == 'GET':
        salesperson = Salesperson.objects.get(id=pk)
        return JsonResponse(
            {'salesperson': salesperson}, encoder=SalespersonDetailEncoder
        )
    elif request.method == 'DELETE':
        count, _ = Salesperson.objects.filter(id=pk).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )
    else:
        content = json.loads(request.body)
        Salesperson.objects.filter(id=pk).update(**content)
        salesperson = Salesperson.objects.get(id=pk)
        return JsonResponse(
            salesperson, encoder=SalespersonDetailEncoder, safe=False
        )
