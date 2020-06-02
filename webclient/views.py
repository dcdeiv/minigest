from django.views.generic import TemplateView


class CatchAllView(TemplateView):
    template_name = "webclient/index.html"
