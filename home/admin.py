from django.contrib import admin
from .models import Seller, Address
# Register your models here.




class SellerModelAdmin(admin.ModelAdmin):
    list_display = ["__str__",'vegetable', "address", "phonenumber", "quantity", "price", 'image' , "date"]
    list_display_links = ["__str__"]
    list_filter = ["date", "address", "price",]

    class Meta:
        model = Seller


admin.site.register(Seller, SellerModelAdmin)
admin.site.register(Address)

# Register your models here.
