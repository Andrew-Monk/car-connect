from django.urls import path
from .views import list_salespeople, detail_salespeople

urlpatterns = [
    path('salespeople/', list_salespeople, name='list_salespeople'),
    path('salespeople/<int:pk>', detail_salespeople, name="detail_salespeople"),
    
]
