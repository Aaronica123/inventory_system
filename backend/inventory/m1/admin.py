from django.contrib import admin
from .models import market
from .inventory_model import inventory
from .staff_models import staff,staff_logs,staff_reg
# Register your models here.

admin.site.register(market)
admin.site.register(inventory)
admin.site.register(staff)
admin.site.register(staff_logs)
admin.site.register(staff_reg)


