import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export function Altro(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Altro</Typography>
        <Typography variant="subtitle1">Altri dati non catalogati</Typography>
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
            src={`${baseImageUrl}/altro.png`}
            alt="Form impresa sezione altro"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            Il <b>riferimento amministrazione</b> è un codice interno che viene
            assegnato a un'impresa per la gestione interna o tra due aziende,
            delle fatture elettroniche. Non tutti lo utilizzano quindi questo
            campo non è obbligatorio!
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
