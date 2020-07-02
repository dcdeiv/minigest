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
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </SectionSecondary>
  );
}
