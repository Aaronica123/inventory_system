from .staff_models import staff_reg
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import redirect

# def redirect_to_frontend(request):
#     return redirect('https://inventory-system-wine-three.vercel.app/login/')

@csrf_exempt
def Login(request):
    if (request.method == 'POST'):
        try:
            data = json.loads(request.body)
            staff_id = data.get('staff_id')
            pass_word = data.get('pass_word')
            
            try:
                # Corrected .object to .objects for Django QuerySet logic
                staff = staff_reg.objects.get(staff_id=staff_id)
            except staff_reg.DoesNotExist:
                return JsonResponse({'error': 'id not found'}, status=404)
            
            # Corrected staff_reg.pass_word to staff.pass_word to check the specific instance
            if (check_password(pass_word, staff.pass_word)):
                refresh = RefreshToken()
                refresh['staff_id'] = staff.staff_id
                refresh['staff_name'] = staff.staff_name
                
                access_token = str(refresh.access_token)
                
                answer = JsonResponse({
                    'message': 'Login was success',
                    'staff_name': staff.staff_name,
                    'staff_id':staff.staff_id
                }, status=200)
                
                answer.set_cookie(
                    key='access_token',
                    value=access_token,
                    httponly=True,
                    secure=True,
                    samesite='None',
                    max_age=3600
                )
                
                request.session['staff_pk'] = staff.staff_count
                return answer
            else:
                return JsonResponse({'error': 'password is invalid'}, status=401)
                    
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
            
    # 
    # elif(request.method=='GET'):
    #     return redirect_to_frontend(request)
    else:
        return JsonResponse({'error': 'only post allowed'}, status=405)
        

# def Logout(request):
#     response=JsonResponse({'session terminated'})
#     response.delete_cookie('access_token', samesite='Lax',)
#     request.session.flush()
#     return response

def Logout(request):
    # Change the Set {'session terminated'} to a Dict {'message': 'session terminated'}
    response = JsonResponse({'message': 'session terminated'})
    
    # Standard cleanup
    response.delete_cookie('access_token', samesite='Lax')
    request.session.flush()
    
    return response
    