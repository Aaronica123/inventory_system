from .staff_models import staff_logs
from .models import market
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def order(request):
    if(request.method=='POST'):
        try:
            # print(f"Raw body: {request.body}")
            hold_list=[ ]
            data=json.loads(request.body)
            staff_id=data.get('staff_id')
            active_prd=data.get('active_prd')
            default_am=data.get('default_amount')
            am=data.get('amount')
            ard=data.get('active_prd')
            print(f"content is {ard}")
            if(am=='' and ard==''):
                def_am=int(default_am)
                take=staff_logs.objects.filter(staff_id=staff_id)
                if not take:
                    return JsonResponse('the staff doesnt exist')
                for l in take:
                    if(int(l.amount)>=def_am):
                        h={
                            'product_id':l.product_id,
                                    'product_name':l.product_name,
                                    'amount':l.amount,
                                    'payment_date':l.payment_date,
                                    'payment_time':l.payment_time
                        }
                        hold_list.append(h)
                print(f"list is{hold_list}")
                return JsonResponse(hold_list, safe=False)
            
            else:
                amount=int(am)
                take=staff_logs.objects.filter(staff_id=staff_id)
                if not take:
                    return JsonResponse('the staff doesnt exist')
                for l in take:
            
                    if(am and ard):
                        if(int(l.amount)>=amount and str(l.product_name)==ard):
                                hold={
                                    'product_id':l.product_id,
                                    'product_name':l.product_name,
                                    'amount':l.amount,
                                    'payment_date':l.payment_date,
                                    'payment_time':l.payment_time
                                    
                                    
                                }
                                hold_list.append(hold)
                        
                    if(am):
                        if(int(l.amount)>=amount):
                            hold={
                                    'product_id':l.product_id,
                                    'product_name':l.product_name,
                                    'amount':l.amount,
                                    'payment_date':l.payment_date,
                                    'payment_time':l.payment_time
                                    
                                    
                                }
                            hold_list.append(hold)
                    if(ard):
                        if(str(l.product_name)==ard):
                            hold={
                                    'product_id':l.product_id,
                                    'product_name':l.product_name,
                                    'amount':l.amount,
                                    'payment_date':l.payment_date,
                                    'payment_time':l.payment_time
                                    
                                    
                                }
                            hold_list.append(hold)
                            
                        
                            

                        
                    else:
                        hold={
                                'product_id':l.product_id,
                                'product_name':l.product_name,
                                'amount':l.amount,
                                'payment_date':l.payment_date,
                                'payment_time':l.payment_time
                                
                                
                            }
                        hold_list.append(hold)
                print(f"list is{hold_list}")
                return JsonResponse(hold_list, safe=False)
        except Exception as e:
            # print(f"Error occurred: {e}")
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'cannot process'})
        
                
            
            
            
            
            
