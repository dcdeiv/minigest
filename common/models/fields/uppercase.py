from django.db import models


class UpperCaseField(models.CharField):
    def get_prep_value(self, value):
        if value is not None:
            value = value.upper()
        return value
