import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/negozio/form";

export function Primo(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Primi Passi</Typography>
        <Typography variant="subtitle1">
          La prima sezione definisce le caratteristiche del negozio
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
            src={`${baseImageUrl}/negozio.png`}
            alt="Form negozio sezione prima"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Nel campo <b>IMPRESA</b> selezionare l'azienda a cui si vuole
            assegnare il negozio, per esempio l'impresa che avete inserito in
            precedenza.
          </Typography>
          <Typography gutterBottom>
            Il campo <b>INSEGNA</b> chiede che si aggiunga il nome variante del
            negozio. Non aggiungere il nome dell'impresa ma il nome proprio del
            negozio. Per esempio, se la tua azienda si chiama Il mio bar di
            Mario Rossi, ma l'insegna al di fuori del negozio recita "Bananabar"
            è opportuno scrivere l'ultimo e non il primo!
          </Typography>
          <Typography>
            Nel campo <b>CODICE NEGOZIO</b> inserire un codice univoco interno
            che rappresenti il vostro punto vendita. Seguire le istruzioni di
            Google Buisiness! Il codice è composto dal nome del brand/insegna
            più un numero. Esempio: GOOG1.
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
