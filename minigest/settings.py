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
    "minigest.tributi",
    "minigest.anagrafica",
    "minigest.www",
]

"""
    Dipendenze dell'applicazione minigest
    usa questo oggetto come riferimento per installare
    tutte le dipendenze

    ATTENZIONE: una dipendenza importante è 'polymorphic'
    questa dipendenza va installata manualmente e va
    messa al di sopra di 'django.contrib.contenttypes'
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
