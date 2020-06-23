import os

from django.conf import settings

from django.core.files.storage import FileSystemStorage


class CustomStorage(FileSystemStorage):
    def get_available_name(self, name, **kwargs):
        # sostituisce il vecchio file se il nome è identico
        if self.exists(name):
            os.remove(os.path.join(settings.MEDIA_ROOT, name))
        return name
