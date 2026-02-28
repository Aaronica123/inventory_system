from django.db import models

class staff(models.Model):
    staff_count=models.AutoField(primary_key=True)
    staff_id=models.IntegerField()
    staff_password=models.CharField(max_length=255)
    
    class Meta:
        db_table='staff'
    
    def __str__(self):
        return f"{self.staff_id}"

class staff_logs(models.Model):
    staff_logs_count=models.AutoField(primary_key=True)
    staff_id=models.IntegerField()
    product_name=models.CharField(max_length=255)
    product_id=models.IntegerField()
    amount=models.IntegerField()
    payment_date=models.DateTimeField()
    payment_time=models.TimeField()
    
    class Meta:
        db_table='staff_logs'
    
    def __str__ (self):
        return f"{self.staff_id}"

class staff_reg(models.Model):
    staff_count=models.AutoField(primary_key=True)
    staff_name=models.CharField(max_length=255)
    staff_id=models.IntegerField()
    pass_word=models.CharField()
    email=models.EmailField()
    
    
    class Meta:
        db_table='staff_register'
        
    def __str__(self):
        return f"{self.staff_id}"
    
    
    
    
    
        
        
            