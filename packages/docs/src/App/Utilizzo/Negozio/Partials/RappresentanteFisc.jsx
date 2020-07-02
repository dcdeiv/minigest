import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export function RappresentanteFiscale(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">RappresentanteFiscale</Typography>
        <Typography variant="subtitle1">
          In questa sezione è possibile assegnare un rappresentante fiscale
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
            src={`${baseImageUrl}/rappresentante_fiscale.png`}
            alt="Form impresa sezione rappresentante fiscale"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            Selezionare il rappresentante fiscale, ossia l'impresa,
            professionista, già precedentemente aggiunto, che rappresenta
            fiscalmente l'impresa!
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
