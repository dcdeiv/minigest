import React from "react";
import { CodeBlock } from "@minigest/ui";
import { AppSection, AppSectionHeader } from "@minigest/ui";
import { Typography } from "@material-ui/core";

export function Applicazioni() {
  return (
    <AppSection>
      <AppSectionHeader>
        <Typography variant="h4">Installazione delle Applicazioni</Typography>
      </AppSectionHeader>

      <Typography gutterBottom>
        Siccome <b>minigest</b> è una collezione di applicazioni django, tutte
        le applicazioni vanno installate. Tutte le applicazioni dipendono l'una
        dall'altra, quindi è veramente necessario installarle tutte!
      </Typography>

      <Typography gutterBottom>
        Create il vostro progetto django e chiamatelo come volete, installate
        poi <b>minigest</b> col provider (pip, poetry...) che più desiderate,
        installate <b>postgresql</b>, create il vostro database e ricordate di
        configurare django affinché possa connettersi a postgresql.
      </Typography>

      <Typography>
        A questo punto, in <code>INSTALLED_APPS</code> devono essere presenti le
        seguenti applicazioni installate:
      </Typography>

      <CodeBlock caption="settings.py" mt={4} mb={4}>
        {`INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "corsheaders",
    "rest_framework",
]

# minigest applicazioni
INSTALLED_APPS += ["minigest.account", "minigest.www"]
`}
      </CodeBlock>

      <Typography>
        È possibile installare tutto il pacchetto minigest anche importando la
        lista stessa delle applicazioni
      </Typography>

      <CodeBlock caption="settings.py" mt={2}>
        from minigest.settings import MINIGEST_APPS
      </CodeBlock>

      <Typography gutterBottom>
        Attenzione! Il pacchetto <code>MINIGEST_APPS</code> non contiene anche
        tutte le dipendenze, quelle vanno comunque installate a parte!
      </Typography>

      <Typography>
        È possibile anche importare tutte le dipendenze dal paccheddo{" "}
        <code>MINIGEST_DEPENDENCIES</code>
      </Typography>

      <CodeBlock caption="settings.py" mt={2}>
        {`INSTALLED_APPS = (
    [
        "django.contrib.admin",
        "django.contrib.auth",
        "django.contrib.contenttypes",
        "django.contrib.sessions",
        "django.contrib.messages",
        "django.contrib.staticfiles",
    ]
    + MINIGEST_DEPENDENCIES
    + MINIGEST_APPS
)`}
      </CodeBlock>
    </AppSection>
  );
}
