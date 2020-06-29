import React from "react";
import { Typography, Paper, Box } from "@material-ui/core";
import { AppHeader, Section, CodeBlock } from "src/Components";

// Partials
import { Anagrafica, IdFiscali, Sdi, Albo, Rea, Societa } from "./Partials";

export default function Impresa(props) {
  return (
    <React.Fragment>
      <AppHeader mb={4}>
        <Typography variant="overline">utilizzo</Typography>
        <Typography variant="h3">Imprese</Typography>
        <Typography variant="subtitle1" gutterBottom>
          guida all'aggiunta di un'impresa (azienda)
        </Typography>

        <Typography>
          Questo modulo si ispira alla definizione di <b>soggetto fiscale</b>{" "}
          definita dall'Agenzia delle Entrate nelle specifiche tecniche della{" "}
          <b>Fattura Elettronica</b>.
        </Typography>

        <CodeBlock mt={2}>/admin/anagrafica/impresa/</CodeBlock>
      </AppHeader>

      <Section>
        <Paper>
          <Box p={2}>
            <AppHeader mb={2}>
              <Typography variant="h6">Che cos'è un'impresa?</Typography>
            </AppHeader>
            <Typography>
              Un'impresa è un soggetto fiscale possessore di <b>partita iva</b>.
              Per comodità, viene chiamata impresa ogni soggetto fiscale che può
              essere, per esempio, una ditta individuale, un professionista, una
              società, ecc..
            </Typography>
          </Box>
        </Paper>
      </Section>

      <Section>
        <AppHeader mb={2} noDivider>
          <Typography variant="h4">Nuova Impresa</Typography>

          <CodeBlock mt={2} mb={0}>
            /admin/anagrafica/impresa/add/
          </CodeBlock>
        </AppHeader>

        <Typography>
          Se è la prima volta che utilizzate minigest, la prima impresa che
          dovreste aggiungere è proprio la vostra! Vediamo ora nel dettaglio che
          informazioni potete salvare.
        </Typography>

        <Anagrafica />
        <IdFiscali />
        <Sdi />
        <Albo />
        <Rea />
        <Societa />
      </Section>
    </React.Fragment>
  );
}
