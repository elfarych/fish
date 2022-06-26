from django.urls import path
from . import views

urlpatterns = [
    path('', views.WalletListCreateAPIView.as_view()),
    path('<str:address>/', views.WalletRetrieveUpdateDestroyAPIView.as_view())
]
