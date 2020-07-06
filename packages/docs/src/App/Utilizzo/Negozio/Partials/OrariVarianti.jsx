import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/negozio/form";

export function OrariVarianti(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Orari Varianti</Typography>
        <Typography variant="subtitle1">
          In questa sezione è possibile sovrascrivere gli orari standard di un
          negozio a seconda di un'apertura o chiusura straordinaria. Per esempio
          natale, capodanno...
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
            src={`${baseImageUrl}/orari_varianti.png`}
            alt="Form negozio sezione orari varianti"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom>
            Aggiungete la data di inizio e quella di fine in cui l'orario varia.
            In apertura e chiusura inserire gli orari di apertura e chiusura. Se
            il negozio rimane chiuso, non inserire nessun orario. Giustificare
            il cambiamento di orari nell campo motivo.
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
