from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

from rest_framework import viewsets
from datetime import datetime
from django.http import HttpResponse
from .serializers import AccountSerializer
from .models import Account


class AccountView(viewsets.ModelViewSet):
    serializer_class = AccountSerializer
    queryset = Account.objects.all()


'''
def login(request):
    return render(
        request,
        'account/login.html'
    )
'''
# Passing data to template example for later
'''
def login(request):
    return render(
        request,
        'account/login.html',
        {
            'name': name,
            'date': datetime.now()
        }
    )
'''
