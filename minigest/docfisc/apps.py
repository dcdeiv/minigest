""" isort:skip_file """

from django.apps import AppConfig


class DocfiscConfig(AppConfig):
    name = "minigest.docfisc"
    label = "docfisc"
    verbose_name = "Documenti Fiscali"

    def ready(self):
        from .signals.docfisc import (  # noqa F401
            quietanza_check,
            quietanza_delete,
            xml_check,
            xml_delete,
        )
