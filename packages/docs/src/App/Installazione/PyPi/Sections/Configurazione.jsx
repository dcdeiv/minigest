import React from "react";
import { Typography, Link } from "@material-ui/core";
import {
  CodeBlock,
  AppSection,
  AppSectionNested,
  AppSectionHeader,
} from "@minigest/ui";

export function Configurazione(props) {
  return (
    <AppSection>
      <AppSectionHeader>
        <Typography variant="h4" gutterBottom>
          Configurazione
        </Typography>
        <Typography variant="subtitle1">
          Sarà altresì necessario configurare il progetto django affinché
          funzioni nel modo corretto
        </Typography>
      </AppSectionHeader>

      <Typography>
        La seguente configurazione può essere trovata anche nella cartella{" "}
        <Link
          color="secondary"
          href="https://github.com/ctrlmaniac/minigest/tree/main/webapp/settings"
          rel="noopener noreferrer"
          target="_blank"
        >
          webapp/settings
        </Link>
        .
      </Typography>

      <AppSectionNested>
        <AppSectionHeader>
          <Typography variant="h6" gutterBottom>
            AUTH
          </Typography>
          <Typography variant="subtitle1">
            Come spiegato prima, <b>minigest</b> sovrascrive le funzionalità del
            modello <code>User</code>, quindi bisogna cambiare il comportamento
            del progetto django affinché utilizzi il modello degli utenti di
            minigest!
          </Typography>
        </AppSectionHeader>

        <Typography>
          In <code>settings.py</code> aggiungere la seguente impostazione:
        </Typography>

        <CodeBlock caption="settings.py" mt={2}>
          AUTH_USER_MODEL = "account.Utente"
        </CodeBlock>
      </AppSectionNested>

      <AppSectionNested>
        <AppSectionHeader>
          <Typography variant="h6" gutterBottom>
            REST
          </Typography>
          <Typography variant="subtitle1">
            Aggiungere la configurazione di <code>djangorestframewok</code>.
          </Typography>
        </AppSectionHeader>

        <CodeBlock caption="settings.py" mt={2}>
          {`REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": ["rest_framework.permissions.IsAuthenticated"]
}`}
        </CodeBlock>
      </AppSectionNested>

      <AppSectionNested>
        <AppSectionHeader>
          <Typography variant="h6">CSRF e CORS</Typography>
          <Typography variant="subtitle1">
            È molto importante aggiungere la configurazione del cookie CSRF e
            del CORS origin. L'applicazione potrebbe non funzionare altrimenti!
          </Typography>
        </AppSectionHeader>

        <CodeBlock mt={2} caption="settings.py">
          {`CSRF_COOKIE_NAME = "csrftoken"
CORS_ORIGIN_ALLOW_ALL = False`}
        </CodeBlock>

        <Typography>
          Per ulteriori informazioni consultare la documentazione di{" "}
          <Link
            color="secondary"
            href="https://pypi.org/project/django-cors-headers/"
            rel="noopener noreferrer"
            target="_blank"
          >
            django-cors-headers
          </Link>
          .
        </Typography>
      </AppSectionNested>

      <AppSectionNested>
        <AppSectionHeader>
          <Typography variant="h6" gutterBottom>
            MIDDLEWARE
          </Typography>
          <Typography variant="subtitle1">
            <code>django-cors-headers</code> richiede che venga installato anche
            un middleware! Il middleware deve essere aggiunto nella lista dei
            middleware, il più in alto possibile!
          </Typography>
        </AppSectionHeader>

        <CodeBlock caption="settings.py" mt={2}>
          {`MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware", # Importante!
    "django.middleware.security.SecurityMiddleware",
    ...
]`}
        </CodeBlock>

        <Typography>
          Potete anche importare i middleware da minigest!
        </Typography>

        <CodeBlock caption="settings.py" mt={2}>
          {`MIDDLEWARE = MINIGEST_MIDDLEWARE + [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]`}
        </CodeBlock>
      </AppSectionNested>

      <AppSectionNested>
        <AppSectionHeader>
          <Typography variant="h6" gutterBottom>
            urls.py
          </Typography>
          <Typography variant="subtitle1">
            Aggiungere gli url di minigest al vostro progetto.
          </Typography>
        </AppSectionHeader>

        <CodeBlock caption="urls.py" mt={2}>
          {`from django.urls import include, path, re_path

from django.contrib import admin

urlpatterns = [
    path("admin/", admin.site.urls,),
    path("api/", include("minigest.rest.urls")),
    re_path(r"", include("minigest.www.urls")),
]`}
        </CodeBlock>

        <Typography>
          Assegnate la route di default per accedere e uscire da minigest!
        </Typography>

        <CodeBlock caption="settings.py">
          {`LOGIN_URL = "www:accedi"
LOGOUT_REDIRECT_URL = "www:accedi"`}
        </CodeBlock>
      </AppSectionNested>
    </AppSection>
  );
}
