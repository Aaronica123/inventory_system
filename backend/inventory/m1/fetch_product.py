from .models import market
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def product(request):
    hold=[]
    mt=market.objects.all()
    
    for m in mt:
        hp={
            'product_name':m.super_name,
            'product_id':m.super_id
        }
        hold.append(hp)
        
        print(f"{hold}")
    return JsonResponse(hold,safe=False)


