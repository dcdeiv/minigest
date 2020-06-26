import React from "react";
import { Typography } from "@material-ui/core";
import { Section, HeaderSection, CodeBlock } from "src/Components";

export function Applicazioni(props) {
  return (
    <Section>
      <HeaderSection>
        <Typography variant="h4">Installazione delle Applicazioni</Typography>
      </HeaderSection>

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
    "polymorphic", # deve essere installata prima di contenttypes!!!
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "localflavor", # dipendenza
    "rest_framework", # dipendenza
    "corsheaders", # dipendenza
]

# minigest applicazioni
INSTALLED_APPS += [
    "minigest.anagrafica",
    "minigest.common",
    "minigest.docfisc",
    "minigest.fisco",
    "minigest.negozi",
    "minigest.pdf",
    "minigest.rest",
    "minigest.tributi",
    "minigest.www",
]
`}
      </CodeBlock>

      <Typography>
        È possibile installare tutto il pacchetto minigest anche importando la
        lista stessa delle applicazioni
      </Typography>

      <CodeBlock caption="settings.py" mt={2}>
        from minigest.settings import APPS as MINIGEST_APPS
      </CodeBlock>

      <Typography>
        Attenzione! Il pacchetto <code>APPS</code> non contiene anche tutte le
        dipendenze, quelle vanno comunque installate a parte!
      </Typography>

      <CodeBlock caption="minigest.settings" mt={2}>
        {`APPS = [
    "minigest.anagrafica",
    "minigest.common",
    "minigest.docfisc",
    "minigest.fisco",
    "minigest.negozi",
    "minigest.pdf",
    "minigest.rest",
    "minigest.tributi",
    "minigest.www",
]`}
      </CodeBlock>
    </Section>
  );
}
