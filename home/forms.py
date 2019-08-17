from django import forms
from .models import Seller
from django.contrib.auth.models import User



class SellerForm(forms.ModelForm):
    class Meta:
        model = Seller
        fields = ['name','userimage' , 'vegetable','address','phonenumber','image','date','price','quantity','chatroom']
        # fields = ['name','userimage' , 'vegetable','phonenumber','image','date','price','quantity','chatroom']

class UserForm(forms.ModelForm):
    username = forms.CharField(widget=forms.TextInput(
        attrs={'class':'form-control','placeholder':"Enter user name"}
    ), required=True, max_length=50)
    email = forms.CharField(widget=forms.EmailInput(
        attrs={'class':'form-control','placeholder':"Enter Email"}
    ), required=True, max_length=50)
    first_name = forms.CharField(widget=forms.TextInput(
        attrs={'class':'form-control','placeholder':"Enter first name"}
    ), required=True, max_length=50)
    last_name = forms.CharField(widget=forms.TextInput(
        attrs={'class':'form-control','placeholder':"Enter last name"}
    ), required=True, max_length=50)
    password = forms.CharField(widget=forms.PasswordInput(
        attrs={'class': 'form-control', 'placeholder': "Enter password"}
    ), required=True, max_length=50)
    confirm_password = forms.CharField(widget=forms.PasswordInput(
        attrs={'class': 'form-control', 'placeholder': "Re-Enter password"}
    ), required=True, max_length=50)
    class Meta:
        model = User
        fields = ['username', 'email' , 'first_name' , 'last_name' ,'password']
