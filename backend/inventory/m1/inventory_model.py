from django.db import models

class inventory(models.Model):
    inventory_count=models.AutoField(primary_key=True)
    product_name=models.CharField(max_length=250)
    product_id=models.IntegerField()
    product_stock=models.IntegerField()
    
    class Meta:
        db_table='inventory'
        
    def __str__(self):
        return f"{self.product_id}"
    
    

