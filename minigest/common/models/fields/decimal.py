from django.db import models


class DecimalField(models.DecimalField):
    def __init__(self, *args, **kwargs):
        kwargs["max_digit"] = 19
        kwargs["decimal_places"] = 2
        super().__init__(*args, **kwargs)
