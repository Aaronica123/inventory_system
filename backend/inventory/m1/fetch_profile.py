from .staff_models import staff_reg
import json
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def Profile(request):
    if(request.method=='POST'):
        try:
            print(f"{request.body}")
            data=json.loads(request.body)
            hold=[]
            staff_id=data.get('staff_id')
            
            ft=staff_reg.objects.get(staff_id=staff_id)
            if ft:
                hd={
                'staff_id':ft.staff_id,
                    'staff_name':ft.staff_name,
                    'email':ft.email
                    
                }
                hold.append(hd)
                return JsonResponse(hold,safe=False)
            else:
                return JsonResponse('staff is invalid')
        except Exception as e:
            return JsonResponse({'error':str(e)}, status=400)
    return JsonResponse({'cannot post'})
    
            