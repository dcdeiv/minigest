import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export function Societa(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Dati Societari</Typography>
        <Typography variant="subtitle1">
          In questa sezione è possibile aggiungere tutte le informazioni
          riguardo alla società, quindi non è necessario compilare questa
          sezione se l'impresa non è una società!
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
            src={`${baseImageUrl}/societa.png`}
            alt="Form impresa sezione dati societari"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Il <b>CAPITALE SOCIALE</b> è per l'appunto il capitale sociale della
            società. Questo campo deve contere un numero di tipo decimale,
            quindi niente punti ma solo una virgola qualora ci sia una parte
            decimale nella cifra, esempio: <code>1000000,00</code>.
          </Typography>

          <Typography gutterBottom>
            Il campo <b>Socio Unico</b> descrive se l'impresa ha un solo socio o
            più soci. Selezionare l'opzione che si addice alla società.
          </Typography>
          <Typography gutterBottom>
            Il campo <b>Stato Liquidazione</b> descrive se l'impresa è in stato
            di liquidazione oppure no. Selezionare l'opzione che si addice alla
            società.
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
