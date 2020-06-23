from django.conf import settings

REST_PERM_PROD = ["rest_framework.permissions.IsAuthenticated"]
REST_PERM_DEV = ["rest_framework.permissions.AllowAny"]
REST_PERM = REST_PERM_PROD if settings.PRODUCTION else REST_PERM_DEV

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    "DEFAULT_PERMISSION_CLASSES": REST_PERM
}
