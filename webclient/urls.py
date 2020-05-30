from django.urls import re_path

from .views import CatchAllView

urlpatterns = [re_path(r"", CatchAllView.as_view(), name="catchall")]
