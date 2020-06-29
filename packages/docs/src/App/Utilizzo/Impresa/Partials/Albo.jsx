import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export function Albo(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Identificativi Fiscali</Typography>
        <Typography variant="subtitle1">
          In questa sezione è possibile aggiungere tutti gli identificativi
          fiscali di un'impresa, per esempio il codice fiscale, la partita iva e
          così via...
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
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </SectionSecondary>
  );
}
