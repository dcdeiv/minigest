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
    "minigest.common",
    "minigest.anagrafica",
    "minigest.docfisc",
    "minigest.negozi",
    "minigest.tributi",
    "minigest.fisco",
]

# clients
INSTALLED_APPS += [
    "rest",
    "pdf",
    "webclient",
]
