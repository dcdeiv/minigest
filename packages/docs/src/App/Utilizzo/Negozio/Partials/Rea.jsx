import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export function Rea(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">
          REA - Repertorio Economico Amministrativo
        </Typography>
        <Typography variant="subtitle1">
          In questa sezione è possibile aggiungere tutte le informazioni
          riguardo il codice REA assegnato all'impresa
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
            src={`${baseImageUrl}/rea.png`}
            alt="Form impresa sezione REA"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            L'<b>UFFICIO REA</b> è il codice a due cifre della provincia di
            iscrizione!
          </Typography>
          <Typography gutterBottom>
            Il <b>NUMERO REA</b> è il codice assegnato all'impresa dal registro
            delle imprese!
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
