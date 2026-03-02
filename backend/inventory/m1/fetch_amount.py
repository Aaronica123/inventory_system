from .models import market
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def Amount(request):
    if(request.method=='POST'):
        try:
            
            data=json.loads(request.body)
            product_name=data.get('product_name')
            
            md=market.objects.get(super_name=product_name)
            if(md):
                
                k=md.super_stock
                
                return JsonResponse({'k':k},safe=False)
            else:
                return JsonResponse({'error':'the amount is invalid'},status=404)
        except Exception as e:
            return JsonResponse({'error':str(e)},status=402)
        except ValueError as v:
            return JsonResponse({'error':str(v)},status=405)
    return JsonResponse('the method is invalid')

                            
    
    
    
    