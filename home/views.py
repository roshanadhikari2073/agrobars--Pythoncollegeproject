from django.shortcuts import render, redirect, get_object_or_404
# from .forms import ContactForm
from .forms import SellerForm
from django.contrib import messages
from .models import Seller, Address 
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.views.generic import View
from django.template import context
from django.db.models import Q
from .forms import UserForm
from django.contrib import auth
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
# Create your views here.





#show sellers
def seller(request):
    seller_list = Seller.objects.all()
    address_list = Address.objects.all()
    context = {
        "seller_list": seller_list,
        "address_list": address_list
    }
    return render(request, 'home/index.html', context)




# About
def about(request):
    return render(request, 'home/about.html')


# Detail of sellers


def seller_detail(request, slug=None):
    instance = get_object_or_404(Seller, slug=slug)
    context = {
        "instance":instance
    }
    return render(request, 'story/storydetail.html',context)

def seller_address(request, name=None):
    seller_list = Seller.objects.filter(address__name=name)
    address_list = Address.objects.all()
    context ={
        "seller_list": seller_list,
        "address_list": address_list,
        "name": name
    }
    return render(request, 'story/tag-story.html', context)    



# buy ko lagie

def buy(request):
    seller_list = Seller.objects.all()
    address_list = Address.objects.all()
    context = {
        "seller_list": seller_list,
        "address_list": address_list
    }
    return render(request, 'buy.html',context)




# seller registration
def seller_create(request):
    def sellerFormHandle(request):
        received = 0
    if request.method=='POST':
        received = 1
        print("Form Received")
        data = request.POST
        address = data['address']
        add = Address.objects.create(
            name = address
        )
        mutable = request.POST._mutable
        request.POST._mutable = True
        request.POST['address'] = add.id
        request.POST._mutable = mutable

        # print(add.id)
        form = SellerForm(request.POST or None, request.FILES or None)
        print(form.data)

        # form.data['address'] = add.id
        # print(form.data)
        print(form)
        if form.is_valid():
            form.save()
            messages.success(request, 'SUBMITTED--->>>')
        else:
            messages.error(request, 'Error')
    context ={
        "form": sellerFormHandle(request)
    }
    return render(request, 'story/story-form.html', context)





# Searchhhhhhhhh

def search(request):
    if request.method=='POST':
        srch = request.POST['srh']

        if srch:
            match = Seller.objects.filter(Q(name__icontains=srch) |
                                          Q(vegetable__icontains=srch)
                                          )
            if match:
                return render(request,'search.html',{'sr':match})
            else:
                messages.error(request,'no result found')
        else:
            return HttpResponseRedirect('/search')

    return render(request,'search.html')                      








# Registrationnnnn
def register(request):
    if request.method=='POST':
        form = UserForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            User.objects.create_user(username =username, first_name=first_name, last_name =last_name, email =email, password=password)
            return render(request, "login2.html")

    else:
        form = UserForm()
    return render(request, 'login.html', {'frm':form})




# login for chat

def loginchat(request):
    if request.method=='POST':
        username = request.POST['user']
        password = request.POST['pas'] 
        try:
            user = auth.authenticate(username=username, password=password)
            if user is not None:
                auth.login(request, user)
                return render(request, "chat/index.html")
            else:
                messages.error(request, "Error")

        except auth.ObjectDoesNotExist:
            print("invalid user")

    return render(request, "login2.html")