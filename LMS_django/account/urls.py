from django.urls import path
from hello import views

urlpatterns = [
    path("", views.login, name="login"),
]