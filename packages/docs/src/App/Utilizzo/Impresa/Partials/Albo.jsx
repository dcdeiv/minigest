import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export function Albo(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Albo Professionale</Typography>
        <Typography variant="subtitle1">
          Campi da compilare qualora l'impresa sia un professionista.
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
            src={`${baseImageUrl}/albo_professionale.png`}
            alt="Form impresa sezione identificativi fiscali"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Il form è abbastanza chiaro grazie a tutte le spiegazioni che potete
            trovare sotto i campi:
          </Typography>
          <Typography gutterBottom>
            nel campo <b>Albo Professionale</b> mettere il nome dell'albo
            professionale a cui il professionista è iscritto;
          </Typography>
          <Typography gutterBottom>
            il <b>Provincia Albo</b> inserire il codice a due cifre della
            Provincia presso cui il professionista è iscritto;
          </Typography>
          <Typography gutterBottom>
            il <b>numero dell'iscrizione all'albo</b> è per l'appunto il numero
            fornito dall'albo in riferimento all'iscrizione;
          </Typography>
          <Typography gutterBottom>
            e infine la <b>data di iscrizione</b> è proprio la data in cui il
            professionista si è iscritto all'albo!
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
