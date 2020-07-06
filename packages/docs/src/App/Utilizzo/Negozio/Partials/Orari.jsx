import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/negozio/form";

export function Orari(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Orari</Typography>
        <Typography variant="subtitle1">
          Questa sezione conserva gli orari del punto vendita
        </Typography>
      </AppHeader>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12}>
          <Image
            src={`${baseImageUrl}/orari.png`}
            alt="Form negozio sezione orari"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom>
            In questa sezione potete aggiungere gli orari del punto vendita
            giorno per giorno, basta selezionare il giorno della settimana
            (lunedì, ..., domenica) e gli orari di apertura.
          </Typography>
          <Typography>
            Se un negozio è chiuso in un determinato giorno della settimana, non
            aggiungere nessun orario!
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
