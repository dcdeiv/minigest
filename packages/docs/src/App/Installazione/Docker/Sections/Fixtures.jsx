import React from "react";
import { Typography } from "@material-ui/core";
import {
  AppSection,
  AppSectionNested,
  AppSectionHeader,
  CodeBlock,
} from "@minigest/ui";
import { FixturesTable } from "../../FixturesTable";

export function Fixtures(props) {
  return (
    <AppSection>
      <AppSectionHeader>
        <Typography variant="h4">Fixtures</Typography>
      </AppSectionHeader>

      <Typography gutterBottom>
        In minigest ci sono alcuni modelli che contengono dati utili alla
        gestione dell'economia aziendale, questi dati possono essere forniti da
        voi stessi, ma in generale vengono decisi dallo stato o da altri organi
        statali o europei. Un esempio è il modello delle aliquote IVA. Quel
        modello contiene tutte le aliquote IVA italiane a partire dagli anni 70,
        anno in cui l'IVA è stata introdotta in italia!
      </Typography>

      <Typography>
        Installare una <b>fixture</b> è molto semplice tramite il comando qui
        sotto. Sostituire NOME_FIXTURE con il nome della fixture
      </Typography>

      <CodeBlock>
        docker-compose exec app python manage.py loaddata NOME_FIXTURE
      </CodeBlock>

      <Typography>
        Nota: se il terminale ritorna un errore del tipo{" "}
        <code>ERROR: No container found for app_1</code> ricordati di far
        partire in background i container prima!{" "}
        <code>docker-compose up -d</code>
      </Typography>

      <CodeBlock caption="non hai tempo?">
        docker-compose exec app python manage.py loaddata docfisc fisco tributi
      </CodeBlock>

      <AppSectionNested>
        <AppSectionHeader>
          <Typography variant="h6">Fixtures disponibili</Typography>
        </AppSectionHeader>

        <FixturesTable />
      </AppSectionNested>
    </AppSection>
  );
}
