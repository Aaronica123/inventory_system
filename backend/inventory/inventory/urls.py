"""
URL configuration for inventory project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from m1.views import create_staff
from m1.login_view import Login,Logout
from m1.staff_logs_view import log
from m1.fetch_order import order
from m1.fetch_profile import Profile
from m1.fetch_product import product
from m1.fetch_amount import Amount

urlpatterns = [
    path('admin/', admin.site.urls),
    path('create_staff/',create_staff,name='create_staff'),
    path('login/',Login,name='login'),
    path('staff_log/',log,name='staff_log'),
    path('logout/',Logout,name='logout'),
    path('order_details/',order,name='order_details'),
    path('profile/', Profile, name='profile'),
    path('product_name/',product,name='product'),
    path('fetch_amount/',Amount,name='Amount')
]
