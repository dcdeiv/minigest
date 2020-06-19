import json

from django.views.generic import TemplateView


class AppView(TemplateView):
    template_name = "www/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        user = self.request.user

        if user.is_authenticated:
            auth = {
                "id": user.id,
                "error": False,
                "message": "",
            }
        else:
            auth = {
                "id": False,
                "error": True,
                "message": "Accedi per visualizzare questa pagina!",
            }

        context["id"] = json.dumps(auth["id"])
        context["error"] = json.dumps(auth["error"])
        context["message"] = auth["message"]

        return context
