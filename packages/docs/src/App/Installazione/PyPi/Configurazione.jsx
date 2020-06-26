import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Section, HeaderSection, CodeBlock } from "src/Components";

export function Configurazione(props) {
  return (
    <Section>
      <HeaderSection>
        <Typography variant="h4" gutterBottom>
          Configurazione
        </Typography>
        <Typography variant="subtitle1">
          Sarà altresì necessario configurare il progetto django affinché
          funzioni nel modo corretto
        </Typography>
      </HeaderSection>

      <Typography>
        La seguente configurazione può essere trovata anche nella cartella{" "}
        <Link
          color="secondary"
          href="https://github.com/dcdeiv/minigest/tree/master/webapp/settings"
          rel="noopener noreferrer"
          target="_blank"
        >
          webapp/settings
        </Link>
        .
      </Typography>

      <Section mt={2}>
        <HeaderSection>
          <Typography variant="h6" gutterBottom>
            AUTH
          </Typography>
          <Typography variant="subtitle1">
            Come spiegato prima, <b>minigest</b> sovrascrive le funzionalità del
            modello <code>User</code>, quindi bisogna cambiare il comportamento
            del progetto django affinché utilizzi il modello degli utenti di
            minigest!
          </Typography>
        </HeaderSection>

        <Typography>
          In <code>settings.py</code> aggiungere la seguente impostazione:
        </Typography>

        <CodeBlock caption="settings.py" mt={2}>
          AUTH_USER_MODEL = "anagrafica.Utente"
        </CodeBlock>
      </Section>

      <Section>
        <HeaderSection>
          <Typography variant="h6" gutterBottom>
            REST
          </Typography>
          <Typography variant="subtitle1">
            Aggiungere la configurazione di <code>djangorestframewok</code>.
          </Typography>
        </HeaderSection>

        <CodeBlock caption="settings.py" mt={2}>
          {`REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": ["rest_framework.permissions.IsAuthenticated"]
}`}
        </CodeBlock>
      </Section>

      <Section>
        <HeaderSection>
          <Typography variant="h6">CSRF e CORS</Typography>
          <Typography variant="subtitle1">
            È molto importante aggiungere la configurazione del cookie CSRF e
            del CORS origin. L'applicazione potrebbe non funzionare altrimenti!
          </Typography>
        </HeaderSection>

        <CodeBlock mt={2} caption="settings.py">
          {`CSRF_COOKIE_NAME = "csrftoken"
CORS_ORIGIN_ALLOW_ALL = False`}
        </CodeBlock>
      </Section>

      <Section>
        <HeaderSection>
          <Typography variant="h6" gutterBottom>
            urls.py
          </Typography>
          <Typography variant="subtitle1">
            Aggiungere gli url di minigest al vostro progetto.
          </Typography>
        </HeaderSection>

        <CodeBlock caption="urls.py" mt={2}>
          {`from django.urls import include, path, re_path

from django.contrib import admin

urlpatterns = [
    path("admin/", admin.site.urls,),
    path("api/", include("minigest.rest.urls")),
    path("pdf/", include("minigest.pdf.urls")),
    re_path(r"", include("minigest.www.urls")),
]`}
        </CodeBlock>
      </Section>
    </Section>
  );
}
