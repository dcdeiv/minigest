import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export function Stabile(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Stabile Organizzazione</Typography>
        <Typography variant="subtitle1">
          Per tutte le aziende estere che hanno una stabile organizzazione in
          italia, inserire in questa sezione, la sede della stabile
          organizzazione! Attenzione: Nella sezione sede è opportuno inserire la
          sede estera dell'azienda, mentre in questa sezione la sede italiana
          dell'azienda!
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
            src={`${baseImageUrl}/stabile.png`}
            alt="Form impresa sezione altro"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Nel campo <b>INDIRIZZO</b> inserire l'indirizzo senza il numero
            civico! (es: Viale Italia).
          </Typography>
          <Typography gutterBottom>
            Nel capo <b>NUMERO CIVICO</b> inserire solamente il numero civico!
            (es: 16/A, interno 2)
          </Typography>
          <Typography gutterBottom>
            Nel campo <b>CAP</b> inserire il codice a cinque cifre del capo
            della stabile organizzazione.
          </Typography>
          <Typography gutterBottom>
            Il campo <b>COMUNE</b> inserire il comune dell'indirizzo della
            stabile organizzazione.
          </Typography>
          <Typography gutterBottom>
            Nel campo <b>PROVINCIA</b> inserire il codice a due cifre dell
            provincia della sede della stabile organizzazione.
          </Typography>
          <Typography gutterBottom>
            Nel campo <b>NAZIONE</b> Inserire IT.
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
