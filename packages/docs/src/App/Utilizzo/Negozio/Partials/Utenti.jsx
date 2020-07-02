import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export function Utenti(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Utenti</Typography>
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
            src={`${baseImageUrl}/utenti.png`}
            alt="Form impresa sezione utenti"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            In questa sezione potete assegnare degli utenti (previamente
            iscritti) all'impresa. In questo modo, quando loro accederanno,
            visualizzeranno immediatamente la contabilità e tutti gli altri
            documenti dell'azienda a cui sono assegnati!
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
