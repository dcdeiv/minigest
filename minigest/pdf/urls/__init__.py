from django.urls import include, path

from .corrispettivi import corrispettivi
from .docfisc import docfisc

urlpatterns = [
    path("imprese/<int:impresa>/", include(corrispettivi)),
    path("imprese/<int:impresa>/", include(docfisc)),
]
