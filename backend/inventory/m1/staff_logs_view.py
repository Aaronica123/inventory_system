from .staff_models import staff_logs
from .models import market
import json
from django.http import JsonResponse
from django.utils import timezone

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def log(request):
    if(request.method=='POST'):
        try:
            form_=json.loads(request.body)
            staff_id=form_.get('staff_id')
            product_name=form_.get('product_name')
            payment_date=timezone.now()
            payment_time=timezone.now()
            amount=form_.get('amount')
            am=int(amount)
            if(am<0):
                return JsonResponse({'error':"Amount should be greater than zero"},status=404)
            else:
                bd= market.objects.get(super_name=product_name)
                try:
                    bd = market.objects.get(super_name=product_name)
                except market.DoesNotExist:
                    return JsonResponse({'error': 'Item does not exist'}, status=404)
                product_id=bd.super_id
                
                
                obj=staff_logs.objects.create(
                    staff_id=staff_id,
                    product_id=product_id,
                    product_name=product_name,
                    amount=amount,
                    payment_date=payment_date,
                    payment_time=payment_time
                    
                )
                return JsonResponse({'message': 'Success'}, status=201)
                    
        except Exception as e:
                # 3. CRITICAL: Use 400 or 500 status for errors so React knows it failed
                return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Method not allowed'}, status=405)