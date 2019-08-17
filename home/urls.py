from django.urls import path
from home import views

app_name ='home'

urlpatterns = [
    path('', views.seller, name='seller'),
    path('seller/<slug:slug>/', views.seller_detail, name='sellerDetail'),
    path('address/<str:name>/', views.seller_address, name='addressSeller'),
    path('seller/create', views.seller_create, name='seller_create'),
    path('search/', views.search, name='search'),
    path('buy/', views.buy, name='buy'),
    path('register/', views.register, name='register'),
    path('loginchat/',views.loginchat, name='loginchat'),
    path('about/',views.about, name='about'),    
]   
