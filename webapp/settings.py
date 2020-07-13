import os

from minigest.settings import MINIGEST_APPS, MINIGEST_DEPENDENCIES, MINIGEST_MIDDLEWARE

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG = os.environ.get("DEBUG", True)
PRODUCTION = os.environ.get("PRODUCTION", False)


SECRET_KEY = os.environ.get(
    "SECRET_KEY", "n1nt!$-+o!5za)btm!g#d&8w3k83x&x$b-3^nzrin6+^@5v206"
)

# CORS
CSRF_COOKIE_NAME = "csrftoken"
CORS_ORIGIN_ALLOW_ALL = False
CORS_ALLOW_CREDENTIALS = True
if DEBUG and not PRODUCTION:
    CORS_ORIGIN_WHITELIST = [
        "http://localhost:3000",  # webclient react app
    ]


ALLOWED_HOSTS = ["localhost", "127.0.0.1", "[::1]"]


INSTALLED_APPS = (
    [
        "django.contrib.admin",
        "django.contrib.auth",
        "django.contrib.contenttypes",
        "django.contrib.sessions",
        "django.contrib.messages",
        "django.contrib.staticfiles",
    ]
    + MINIGEST_DEPENDENCIES
    + MINIGEST_APPS
)

MIDDLEWARE = MINIGEST_MIDDLEWARE + [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "webapp.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "webapp.wsgi.application"


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
    }
}


# Password validation

AUTH_USER_MODEL = "account.Utente"

LOGIN_URL = "www:accedi"
LOGOUT_REDIRECT_URL = "www:accedi"

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",  # noqa E501
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",},
]

# Django Rest Framework
REST_PERM_PROD = ["rest_framework.permissions.IsAuthenticated"]
REST_PERM_DEV = ["rest_framework.permissions.AllowAny"]
REST_PERM = REST_PERM_PROD if PRODUCTION else REST_PERM_DEV

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    "DEFAULT_PERMISSION_CLASSES": REST_PERM
}


# Internationalization
LANGUAGE_CODE = "it"
TIME_ZONE = "Europe/Rome"
USE_I18N = True
USE_L10N = True
USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = "/static/"
