from django.shortcuts import render

# Create your views here.
def index(request):
    content_type= {'data':'value','dash':'Petrol'}
    return render(request,'index.html',context=content_type)
