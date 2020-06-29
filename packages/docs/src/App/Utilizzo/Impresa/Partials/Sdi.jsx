import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export function Sdi(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Sistema di Interscambio (SDI)</Typography>
        <Typography variant="subtitle1">
          In questa sezione è possibile aggiungere tutti i recapiti per la
          consegna e ricezione delle fatture elettroniche.
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
            src={`${baseImageUrl}/sdi.png`}
            alt="Form impresa sezione SDI"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Il campo <b>CODICE DESTINATARIO</b> è obbligatorio e va compilato.
            Qualora l'impresa non possegga un codice destinatario, riempire il
            campo con la cifra 0.
          </Typography>
          <Typography gutterBottom>
            Il capo <b>PEC</b> non è obbligatorio ma consigliato e consiste
            nell'indirizzo di posta elettronica certificata!
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
