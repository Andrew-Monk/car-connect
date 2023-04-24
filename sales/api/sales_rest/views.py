from django.views.decorators.http import require_http_methods
from .models import Salesperson, Customer
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


class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
    ]


class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        'last_name',
        'address',
        'phone_number',
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


@require_http_methods(['GET', 'POST'])
def list_customers(request):
    if request.method == 'GET':
        customers = Customer.objects.all()
        return JsonResponse(
            {'customers': customers},
            encoder=CustomerListEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False
        )


@require_http_methods(['DELETE', 'GET', 'PUT'])
def detail_customer(request, pk):
    if request.method == 'GET':
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            {'customer': customer}, encoder=CustomerDetailEncoder
        )
    elif request.method == 'DELETE':
        count, _ = Customer.objects.filter(id=pk).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )
    else:
        content = json.loads(request.body)
        Customer.objects.filter(id=pk).update(**content)
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer, encoder=CustomerDetailEncoder, safe=False
        )
