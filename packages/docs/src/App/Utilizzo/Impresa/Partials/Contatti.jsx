import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export function Contatti(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Contatti</Typography>
        <Typography variant="subtitle1">
          In questa sezione è possibile aggiungere tutti i contatti (email,
          telefono e fax) di un'impresa
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
            src={`${baseImageUrl}/contatti.png`}
            alt="Form impresa sezione identificativi fiscali"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            Si raccomanda di non utilizzare spazi, maiuscole o caratteri
            speciali!
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
