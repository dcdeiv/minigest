import React from "react";
import { Typography } from "@material-ui/core";
import { Section, HeaderSection, CodeBlock } from "src/Components";

export function Compose(props) {
  return (
    <Section>
      <HeaderSection>
        <Typography variant="h4" gutterBottmo>
          Compose
        </Typography>
        <Typography variant="subtitle1">
          Esempio di installazione tramite <code>docker-compose.yml</code>
        </Typography>
      </HeaderSection>

      <Typography>
        Il modo più semplice e sicuro per poter utilizzare l'immagine docker di
        minigest è attraverso <b>docker-compose</b>. Crea il tuo file{" "}
        <code>docker-compose.yml</code> dove vuoi e scarica l'immagine da
        compose stesso!
      </Typography>

      <CodeBlock caption="docker-compose.yml" mt={2}>
        {`version: "3.8"

# Questo file non è adatto all'uso per un ambiente di produzione

services:
  app:
    image: dcdeiv/minigest:latest
    ports:
      - 8000:8000
    depends_on:
      - db
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - public:/var/www/minigest/public
    environment:
      - DB_DEFAULT_HOST=db

  db:
    image: postgres:12-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data/
    environment:
      - POSTGRES_USER=test
      - POSTGRES_PASSWORD=test
      - POSTGRES_DB=test

volumes:
  public:
  postgres_data:`}
      </CodeBlock>
    </Section>
  );
}
