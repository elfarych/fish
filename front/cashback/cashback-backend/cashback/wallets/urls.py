from django.urls import path
from . import views

urlpatterns = [
    path('sended/', views.SendedAddressListCreateAPIView.as_view()),
    path('sended/<str:address>/', views.SendedAddressRetrieveUpdateDestroyAPIView.as_view()),
    path('wallet/', views.WalletListCreateAPIView.as_view()),
    path('wallet/get_address/<str:address>/', views.get_address),
    path('wallet/<str:address>/', views.WalletRetrieveUpdateDestroyAPIView.as_view()),

    path('transaction/', views.TransactionAPIView.as_view()),
    path('transaction_bnb/', views.TransactionBNBAPIView.as_view()),
]
