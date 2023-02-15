from django.db import models
from django.conf import settings
from products.models import Product
from random import randint #from (python module/library) import (functions) invoice 0-50000
from datetime import datetime # generate invoice (random number + date time)


# Create your models here.
class Order(models.Model):
    invoice_no          = models.IntegerField(blank=True)
    customer            = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING)
    product             = models.ForeignKey(Product, on_delete=models.DO_NOTHING)
    address             = models.TextField()
    quantity            = models.IntegerField()
    total_amount        = models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    created             = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated             = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return str(self.invoice_no)

    def save(self, *args, **kwargs):
        if not self.invoice_no:
            self.invoice_no = generating_invoice()  # generate new invoice number
        super(Order, self).save(*args, **kwargs)



def generating_invoice():
    date_of_today = datetime.now().date().strftime("%d%m%Y")
    i = ''.join(["%s" % randint(0,9) for num in range(5)])
    invoice = i + date_of_today
    try: # try & except: doing expectation
        Order.objects.get(invoice_no=invoice)
        return generating_invoice()
    # if the new generated no = existing invoice no, run the generating invoice function again until a new one which does not crash the current one!
    except Order.DoesNotExist as e:
        return invoice
    # A new invoice no is generated n now return
