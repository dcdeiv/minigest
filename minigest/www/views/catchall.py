import json

from django import http
from django.conf import settings
from django.template import engines
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView

import requests


@csrf_exempt
def catchall_dev(request, upstream="http://localhost:9000"):
    upstream_url = upstream + request.path
    response = requests.get(upstream_url, stream=True)
    content_type = response.headers.get("Content-Type")

    if content_type == "text/html; charset=UTF-8":
        return http.HttpResponse(
            content=engines["django"].from_string(response.text).render(),
            status=response.status_code,
            reason=response.reason,
        )

    else:
        return http.StreamingHttpResponse(
            streaming_content=response.iter_content(2 ** 12),
            content_type=content_type,
            status=response.status_code,
            reason=response.reason,
        )


class CatchAllView(TemplateView):
    template_name = "webclient/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        user = self.request.user

        if user.is_authenticated:
            auth = {
                "id": user.id,
                "error": False,
                "message": None,
            }
        else:
            auth = {
                "id": False,
                "error": True,
                "message": "Accedi per visualizzare questa pagina!",
            }

        context["id"] = json.dumps(auth["id"])
        context["error"] = json.dumps(auth["error"])
        context["message"] = json.dumps(auth["message"])

        return context


catchall = catchall_dev if not settings.PRODUCTION else CatchAllView.as_view()
