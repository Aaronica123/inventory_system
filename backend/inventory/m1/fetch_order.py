from .staff_models import staff_logs
from .models import market
from django.http import JsonResponse
import json
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt


@csrf_exempt
def order(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Method not allowed'}, status=405)
        
    try:
        data = json.loads(request.body)
        staff_id = data.get('staff_id')
        start_date_str = data.get('start_date')
        finish_date_str = data.get('finish_date')
        am = data.get('amount')
        ard = data.get('active_prd')
        default_am = data.get('default_amount', 0)

        
        records = staff_logs.objects.filter(staff_id=staff_id)
        if not records.exists():
             return JsonResponse({'error': 'Staff member not found'}, status=404)

      
        st = datetime.strptime(start_date_str, '%Y-%m-%d').date() if start_date_str else None
        fn = datetime.strptime(finish_date_str, '%Y-%m-%d').date() if finish_date_str else None
        filter_amount = int(am) if (am and am != '') else None
        filter_prd = int(ard) if (ard and ard != '') else None

        hold_list = []

        for l in records:
            if st and fn:
                if not (st <= l.payment_date <= fn):
                    continue  # Skip this record, it's outside the date range
            
           
            target_amount = filter_amount if filter_amount is not None else int(default_am)
            if int(l.amount) < target_amount:
                continue 
            
            
            if filter_prd:
                if int(l.product_id) != filter_prd:
                    continue 

            
            hold_list.append({
                'product_id': l.product_id,
                'product_name': l.product_name,
                'amount': l.amount,
                'payment_date': l.payment_date,
                'payment_time': l.payment_time
            })

        return JsonResponse(hold_list, safe=False)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)