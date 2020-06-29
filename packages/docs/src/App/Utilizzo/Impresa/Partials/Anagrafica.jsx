import React from "react";
import { Typography, Grid, Link } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export function Anagrafica(props) {
  return (
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
            azienda, impresa o società. Scrivete la denominazione dell'azienda
            così come è stata registrata presso il registro delle imprese! Campo
            obbligatorio!
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
            è l'identificazione univoca delle operazioni doganali all'interno
            della UE. Questo campo è facoltativo!
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
