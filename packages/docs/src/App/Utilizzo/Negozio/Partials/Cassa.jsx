import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/negozio/form";

export function Cassa(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Cassa</Typography>
        <Typography variant="subtitle1">
          Questa sezione descrive i punti cassa all'interno di un negozio
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
            src={`${baseImageUrl}/cassa.png`}
            alt="Form negozio sezione cassa"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            A questo punto è possibile aggiungere i punti cassa/registratori
            fiscali presenti nel punto vendita! Potete aggiungere tutti i punti
            cassa che volete!
          </Typography>
          <Typography gutterBottom>
            L'unico campo richiesto è il <b>CODICE IDENTIFICATIVO CASSA</b> che
            consiste in un codice alfanumerico (numeri e lettere) per
            distinguere i diversi punti cassa all'interno del punto vendita
          </Typography>
          <Typography>
            Il campo <b>ID REGISTRATORE</b> non è obbligatorio, ma potete
            salvare il codice assegnato dall'agenzia delle entrate al
            registratore fiscale. Questo campo è utile per salvare
            l'informazione affinché possiate trovarla in futuro qualora dobbiate
            ricercare i corrispettivi emessi dal registratore sul sito
            dell'agenzia delle entrate!
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
