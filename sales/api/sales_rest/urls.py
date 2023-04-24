from django.urls import path
from .views import list_salespeople, detail_salespeople, list_customers, detail_customer

urlpatterns = [
    path('salespeople/', list_salespeople, name='list_salespeople'),
    path('salespeople/<int:pk>', detail_salespeople, name="detail_salespeople"),
    path('customers/', list_customers, name='list_customers'),
    path('customers/<int:pk>', detail_customer, name='detail_customer'),

]
