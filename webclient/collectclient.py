import json
import os
import re
import shutil

CLIENT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(CLIENT_DIR)
PUBLIC_STATIC_DIR = os.path.join(ROOT_DIR, "public/static")

TEMPLATE_DIR = os.path.join(CLIENT_DIR, "templates/webclient")
INDEX_OLD = os.path.join(TEMPLATE_DIR, "index.html")

STATIC_DIR = os.path.join(CLIENT_DIR, "static/webclient")

BUILD_DIR = os.path.join(CLIENT_DIR, "build")
INDEX_NEW = os.path.join(BUILD_DIR, "index.html")
ASSET_MANIFEST = os.path.join(BUILD_DIR, "asset-manifest.json")


def index():
    if os.path.exists(INDEX_OLD):
        # Elimina il vecchio index.html
        os.remove(INDEX_OLD)

    shutil.move(INDEX_NEW, INDEX_OLD)
    print("- index.html copiato!")
    print("")
    return 1


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
    return 1


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
        W_SERVICE.write(line.replace('"/static/webclient/index.html"', '"/index.html"'))

    print("- service-worker.js modificato!")

    # eliminazione del backup
    print("- eliminazione del backup\n")
    os.remove(SERVICE_BACKUP)
    return 1


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
            W_MANIFEST.write(
                line.replace('"/static/webclient/index.html"', '"/index.html"')
            )

        print(f"- {MANIFEST_NAME} modificato!")

        # eliminazione del backup
        print("- eliminazione del backup\n")
        os.remove(MANIFEST_BACKUP)
        return 1


def collectstatics():
    print("- copia dei file")

    # Eliminazione dei vecchi file
    if os.path.isdir(STATIC_DIR):
        shutil.rmtree(STATIC_DIR)

    # Copia dei file
    os.rename(BUILD_DIR, STATIC_DIR)

    print("- copia dei file terminata!")
    print("")
    return 1


def purgestatics():
    print("- eliminazione della cartella static")
    if os.path.isdir(PUBLIC_STATIC_DIR):
        shutil.rmtree(PUBLIC_STATIC_DIR)

    return 1


def run():
    # Controlla che la cartella "build" esista
    if not os.path.isdir(BUILD_DIR):
        messaggio = """
        Client non costruito!\n
        Per costruirlo esegui il comando yarn run build:webclient
        """
        print(messaggio)
    else:
        # Controlla se la cartella "build" è vuota
        if not os.listdir(BUILD_DIR):
            messaggio = """
            Client non costruito!\n
            Sembra che la cartella webclient/build sia vuota!
            Sei sicuro di aver dato il comando yarn run build:webclient
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

            # Sposta e rinomina la cartella build in ./static/webclient
            collectstatics()

            # Elimina la vecchia cartella STATIC
            purgestatics()

            return 1
