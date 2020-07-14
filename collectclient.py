"""
Script che permette di copiare e modificare/aggiustare
tutti i file del client www
"""


import json
import os
import re
import shutil

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_STATIC_DIR = os.path.join(ROOT_DIR, "public/static")
CLIENT_DIR = os.path.join(ROOT_DIR, "packages/www")
APP_DIR = os.path.join(ROOT_DIR, "minigest/www")
BUILD_DIR = os.path.join(CLIENT_DIR, "build")
TEMPLATES_DIR = os.path.join(APP_DIR, "templates/www")
STATIC_DIR = os.path.join(APP_DIR, "static/www")

INDEX_OLD = os.path.join(TEMPLATES_DIR, "index.html")
INDEX_NEW = os.path.join(BUILD_DIR, "index.html")
ASSET_MANIFEST = os.path.join(BUILD_DIR, "asset-manifest.json")


def index():
    if os.path.exists(TEMPLATES_DIR):
        if os.path.exists(INDEX_OLD):
            # Elimina il vecchio index.html
            os.remove(INDEX_OLD)
    else:
        os.makedirs(TEMPLATES_DIR)

    shutil.move(INDEX_NEW, INDEX_OLD)
    print("- index.html copiato!")
    print("")


def asset_manifest():
    print("- modifica di asset-manifest.json")

    # Modifica asset-manifest.json
    with open(ASSET_MANIFEST, "r+") as f:
        data = json.load(f)

        # aggiorna la posizione di index.html
        data["files"]["index.html"] = "/index.html"
        f.seek(0)
        json.dump(data, f, indent=2)
        f.truncate()
    print("- asset-manifest.json modificato!")
    print("")


def service_worker():
    print("- modifica di service-worker.js")

    SERVICE_OUT = os.path.join(BUILD_DIR, "service-worker.js")
    SERVICE_BACKUP = os.path.join(BUILD_DIR, "service-worker-back.js")

    print("- creazione del backup di service-worker.js")
    shutil.copy2(SERVICE_OUT, SERVICE_BACKUP)

    print("- modifica di service-worker.js")

    R_SERVICE = open(SERVICE_BACKUP, "rt")
    W_SERVICE = open(SERVICE_OUT, "wt")

    for line in R_SERVICE:
        W_SERVICE.write(line.replace('"/static/www/index.html"', '"/index.html"'))

    R_SERVICE.close()
    W_SERVICE.close()

    print("- service-worker.js modificato!")

    # eliminazione del backup
    print("- eliminazione del backup\n")
    os.remove(SERVICE_BACKUP)


def precache_manifest():
    # Cerca il precache-manifest
    print("- ricerca di precache-manifest.(.*).js")

    pattern = re.compile(r"^precache-manifest[\.][a-zA-Z0-9]*[\.]js$")
    MANIFEST_NAME = ""

    # Ricerca del manifest
    for f in os.listdir(BUILD_DIR):
        if not pattern.match(f):
            pass
        else:
            MANIFEST_NAME = f

    if MANIFEST_NAME == "":
        print("Errore: precache-manifest.(.*).js non trovato!")
        return 0
    else:
        print(f"- trovato: {MANIFEST_NAME}")
        print(f"- creazione del backup di {MANIFEST_NAME}")

        MANIFEST_OUT = os.path.join(BUILD_DIR, MANIFEST_NAME)
        MANIFEST_BACKUP = os.path.join(BUILD_DIR, "precache-manifest.js")

        shutil.copy2(MANIFEST_OUT, MANIFEST_BACKUP)

        print(f"- modifica di {MANIFEST_NAME}")
        R_MANIFEST = open(MANIFEST_BACKUP, "rt")
        W_MANIFEST = open(MANIFEST_OUT, "wt")

        for line in R_MANIFEST:
            W_MANIFEST.write(line.replace('"/static/www/index.html"', '"/index.html"'))

        R_MANIFEST.close()
        W_MANIFEST.close()

        print(f"- {MANIFEST_NAME} modificato!")

        # eliminazione del backup
        print("- eliminazione del backup\n")
        os.remove(MANIFEST_BACKUP)


def collectstatics():
    print("- copia dei file")

    # Eliminazione dei vecchi file
    if os.path.isdir(STATIC_DIR):
        shutil.rmtree(STATIC_DIR)

    # Copia dei file
    shutil.move(BUILD_DIR, STATIC_DIR)

    print("- copia dei file terminata!")
    print("")


def purgestatics():
    print("- eliminazione della cartella static")
    if os.path.isdir(PUBLIC_STATIC_DIR):
        shutil.rmtree(PUBLIC_STATIC_DIR)


def run():
    # Controlla che la cartella "build" esista
    if not os.path.isdir(BUILD_DIR):
        messaggio = """
        Client non costruito!\n
        Per costruirlo esegui il comando yarn run build:www
        """
        print(messaggio)
    else:
        # Controlla se la cartella "build" è vuota
        if not os.listdir(BUILD_DIR):
            messaggio = """
            Client non costruito!\n
            Sembra che la cartella www/build sia vuota!
            Sei sicuro di aver dato il comando yarn run build:www
            e che questo abbia finito?
            """
            print(messaggio)
        else:
            # Copia del file index
            index()

            # Modifica del file asset-manifest.json
            asset_manifest()

            # Modifica del file precache-manifest
            precache_manifest()

            # Modifica del file service-worker.js
            service_worker()

            # Sposta e rinomina la cartella build in ./static/www
            collectstatics()

            # Elimina la vecchia cartella STATIC
            purgestatics()
