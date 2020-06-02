import os

from split_settings.tools import include

from .common.database import DATABASE

DEBUG = True
PRODUCTION = False

# Progetto
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")

SECRET_KEY = "n1nt!$-+o!5za)btm!g#d&8w3k83x&x$b-3^nzrin6+^@5v206"

# Include i componenti comuni
include(
    "common/apps.py",
    "common/middleware.py",
    "common/auth.py",
    "common/intl.py",
    "common/rest.py",
    "common/templates.py",
    # "common/database.py" --> questo modulo viene escluso
)

CORS_ORIGIN_WHITELIST = [
    "http://localhost:9000",  # webclient react app
]


ALLOWED_HOSTS = []


ROOT_URLCONF = "minigest.urls"

WSGI_APPLICATION = "minigest.wsgi.application"

DATABASES = {"default": DATABASE["LOCAL"]}


# STATIC AND MEDIA FILES

STATIC_URL = "/static/"
MEDIA_URL = "/media/"

STATIC_ROOT = os.path.join(PUBLIC_DIR, "static/")
MEDIA_ROOT = os.path.join(PUBLIC_DIR, "media/")
