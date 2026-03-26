from django.contrib import admin
from django.urls import path
from api.views import get_profile_data, send_contact

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/profile/', get_profile_data),
    path('api/contact/', send_contact), # مسار التواصل
]