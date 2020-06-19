import os

from split_settings.tools import include

DEBUG = True
PRODUCTION = False

# Progetto
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")

SECRET_KEY = os.environ.get(
    "MINIGEST_SECRET_KEY", "n1nt!$-+o!5za)btm!g#d&8w3k83x&x$b-3^nzrin6+^@5v206"
)

# Include i componenti comuni
include(
    "common/apps.py",
    "common/middleware.py",
    "common/auth.py",
    "common/intl.py",
    "common/rest.py",
    "common/templates.py",
    "common/database.py",
)

# CORS
CSRF_COOKIE_NAME = "csrftoken"
CORS_ORIGIN_ALLOW_ALL = False
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_WHITELIST = [
    "http://localhost:9000",  # webclient react app
]


ALLOWED_HOSTS = ["localhost", "127.0.0.1", "[::1]"]


ROOT_URLCONF = "webapp.urls"

WSGI_APPLICATION = "webapp.wsgi.application"


# STATIC AND MEDIA FILES

STATIC_URL = "/static/"
MEDIA_URL = "/media/"

STATIC_ROOT = os.path.join(PUBLIC_DIR, "static/")
MEDIA_ROOT = os.path.join(PUBLIC_DIR, "media/")
