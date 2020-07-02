import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/negozio/form";

export function Sede(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Sede</Typography>
        <Typography variant="subtitle1">
          In questa sezione è possibile aggiungere l'indirizzo della sede del
          negozio. È possibile aggiungere un solo indirizzo di tipo sede!
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
            src={`${baseImageUrl}/sede.png`}
            alt="Form negozio sezione sede"
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
            Se la sede è estera, inserire 00000 (cinque volte zero) nel capo{" "}
            <b>CAP</b>. Campo obbligatorio!
          </Typography>
          <Typography gutterBottom>
            Il campo <b>COMUNE</b> inserire il comune dell'indirizzo della sede.
          </Typography>
          <Typography gutterBottom>
            Inserire la <b>PROVINCIA</b> in due cifre (es: MI)
          </Typography>
          <Typography gutterBottom>
            Nel capo <b>Nazione</b> inserire il codice a due cifre della nazione
            della sede.
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
