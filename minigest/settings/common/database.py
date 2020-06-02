import os

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": os.environ.get("DB_DEFAULT_NAME", "test"),
        "USER": os.environ.get("DB_DEFAULT_USER", "test"),
        "PASSWORD": os.environ.get("DB_DEFAULT_PW", "test"),
        "HOST": os.environ.get("DB_DEFAULT_HOST", "localhost"),
        "PORT": 5432,
    }
}
