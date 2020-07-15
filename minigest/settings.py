"""
    Importa MINIGEST_APPS per installare tutte le applicazioni
    minigest in una sola volta!
    Altrimenti usa questa impostazione come riferimento per le app
    da installare
"""
MINIGEST_APPS = [
    "minigest.common",
    "minigest.account",
    "minigest.fisco",
    "minigest.www",
]

"""
    Dipendenze dell'applicazione minigest
    usa questo oggetto come riferimento per installare
    tutte le dipendenze
"""
MINIGEST_DEPENDENCIES = ["corsheaders", "rest_framework"]

"""
    django-cors-headers
    inserisci il middleware `corsheaders.middleware.CorsMiddleware`
    nella sezione MIDDLEWARE in settings dell'applicazione
    posiziona il middleware il più in alto possibile,
    e comunque sopra `django.middleware.common.CommonMiddleware` o Whitenoise
"""
MINIGEST_MIDDLEWARE = ["corsheaders.middleware.CorsMiddleware"]
