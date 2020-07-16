import React from "react";
import { Typography } from "@material-ui/core";
import {
  CodeBlock,
  AppSection,
  AppSectionHeader,
  AppSectionNested,
} from "@minigest/ui";
import { FixturesTable } from "../../FixturesTable";

export function Fixtures() {
  return (
    <AppSection>
      <AppSectionHeader>
        <Typography variant="h4" gutterBottom>
          Fixtures
        </Typography>
        <Typography variant="subtitle1">
          Le fixtures in django sono dati di backup di determinati modelli o
          applicazioni. Se installate, riempiono le tabelle del database con dei
          dati pre-esistenti! Noi le utilizziamo per riempire il database con
          dei dati utili all'utilizzo di minigest
        </Typography>
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

      <CodeBlock>python manage.py loaddata NOME_FIXTURE</CodeBlock>

      <CodeBlock caption="non hai tempo?">
        python manage.py loaddata docfisc fisco tributi
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
