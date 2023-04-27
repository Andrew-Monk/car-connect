from django.views.decorators.http import require_http_methods
from .models import Salesperson, Customer, Sale, AutomobileVO
import json
from django.http import JsonResponse
from .encoders import (
    SaleDetailEncoder,
    SaleListEncoder,
    SalespersonDetailEncoder,
    SalespersonListEncoder,
    CustomerDetailEncoder,
    CustomerListEncoder
)


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


@require_http_methods(["GET", "POST"])
def list_sales(request, vin=None):
    if request.method == 'GET':
        if vin is not None:
            try:
                automobile = AutomobileVO.objects.get(vin=vin)
                sales = Sale.objects.filter(automobile=automobile)
                return JsonResponse(
                    {'sales': sales},
                    encoders=SaleListEncoder
                )
            except AutomobileVO.DoesNotExist:
                return JsonResponse(
                    {'message': 'automobile with that vin does not exist'},
                    status=404
                )
        else:
            sales = Sale.objects.all()
            return JsonResponse(
                {'sales': sales},
                encoder=SaleListEncoder
            )
    else:
        content = json.loads(request.body)
        try:
            salesperson = Salesperson.objects.get(id=content['salesperson'])
            content['salesperson'] = salesperson
            print(salesperson, "test test test")
            customer = Customer.objects.get(id=content['customer'])
            content['customer'] = customer
            print(customer, "customer customer test test test")
            automobile = AutomobileVO.objects.get(vin=content['automobile'])
            content['automobile'] = automobile
            print(automobile, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
            print(content)
        except (
            Salesperson.DoesNotExist,
            Customer.DoesNotExist,
            AutomobileVO.DoesNotExist
        ):
            return JsonResponse(
                {'message': "invalid stuff"},
                status=400
            )
        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale, encoder=SaleDetailEncoder,
            safe=False
        )


@require_http_methods(['DELETE', 'GET', 'PUT'])
def detail_sale(request, pk):
    if request.method == 'GET':
        sale = Sale.objects.get(id=pk)
        return JsonResponse(
            {'sale': sale}, encoder=SaleDetailEncoder
        )
    elif request.method == 'DELETE':
        count, _ = Sale.objects.filter(id=pk).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )
    else:
        content = json.loads(request.body)
        Sale.objects.filter(id=pk).update(**content)
        sale = Sale.objects.get(id=pk)
        return JsonResponse(
            sale, encoder=SaleDetailEncoder, safe=False
        )
