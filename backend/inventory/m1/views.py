from django.shortcuts import render
from .staff_models import staff_reg
from django.contrib.auth.hashers import make_password
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

@csrf_exempt
def create_staff(request):
    if(request.method=='POST'):
        try:
            form=json.loads(request.body)
            
            staff_id=form.get('staff_id')
            staff_name=form.get('staff_name')
            email=form.get('email')
            pass_word=form.get('password')
            
            obj=staff_reg.objects.create(
                staff_id=staff_id,
                staff_name=staff_name,
                email=email,
                pass_word=make_password(pass_word)
                )
            
           # Use a dictionary with keys
             
            return JsonResponse({'message': 'success', 'staff_id': staff_id}, status=200)

            # And fix the error catch too:
        except Exception as e:
                return JsonResponse({'error': str(e)}, status=400)
    
    
        
        
        
        
        
                
        
        
    
