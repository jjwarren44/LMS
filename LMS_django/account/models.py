from django.db import models

# Create your models here.


class Account(models.Model):
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=50)
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    teacher = models.BooleanField(default=False)
