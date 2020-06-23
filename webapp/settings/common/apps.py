INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "polymorphic",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "localflavor",
    "rest_framework",
    "corsheaders",
]

# minigest applicazioni
INSTALLED_APPS += [
    "minigest.anagrafica",
    "minigest.common",
    "minigest.docfisc",
    "minigest.fisco",
    "minigest.negozi",
    "minigest.pdf",
    "minigest.rest",
    "minigest.tributi",
    "minigest.www",
]
