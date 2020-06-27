import React from "react";
import { Typography, Grid, Link, Paper, Box } from "@material-ui/core";
import {
  AppHeader,
  Section,
  SectionSecondary,
  CodeBlock,
  Image,
} from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export default function Imprese(props) {
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

        <SectionSecondary>
          <AppHeader noDivider mb={2}>
            <Typography variant="h6">Anagrafica</Typography>
            <Typography variant="subtitle1">
              La prima sezione che troverete nel form si chiama Anagrafica. In
              questa sezione sarà obbligatorio aggiungere l'informazione della
              denominazione. È invece facoltativo aggiungere il codice EORI.
            </Typography>
          </AppHeader>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={12} sm={6}>
              <Image
                src={`${baseImageUrl}/anagrafica.png`}
                alt="Form impresa sezione anagrafica"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography gutterBottom>
                La{" "}
                <Link
                  href="https://it.wikipedia.org/wiki/Ragione_sociale"
                  rel="noreferrer noopener"
                  target="_blank"
                  color="secondary"
                >
                  DENOMINAZIONE
                </Link>{" "}
                (anche chiamata ragione sociale) è il nome proprio della vostra
                azienda, impresa o società. Scrivete la denominazione
                dell'azienda così come è stata registrata presso il registro
                delle imprese! Campo obbligatorio!
              </Typography>

              <Typography>
                Il{" "}
                <Link
                  href="https://it.wikipedia.org/wiki/Economic_Operator_Registration_and_Identification"
                  rel="noreferrer noopener"
                  target="_blank"
                  color="secondary"
                >
                  CODICE EORI
                </Link>{" "}
                è l'identificazione univoca delle operazioni doganali
                all'interno della UE. Questo campo è facoltativo!
              </Typography>
            </Grid>
          </Grid>
        </SectionSecondary>
      </Section>
    </React.Fragment>
  );
}
