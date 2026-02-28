from django.db import models

# Create your models here.

class market(models.Model):
    super_id=models.IntegerField()
    super_name=models.CharField(max_length=255)
    super_stock=models.IntegerField()
    market_count=models.AutoField(primary_key=True)
    
    class Meta:
        db_table='market'
        
    def __str__(self):
        return f"{self.super_id}"
    

        
    
    