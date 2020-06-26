import React from "react";
import { Typography } from "@material-ui/core";
import { AppHeader } from "src/Components";

export function Home(props) {
  return (
    <React.Fragment>
      <AppHeader>
        <Typography component="h1" variant="h3">
          minigest
        </Typography>
        <Typography variant="subtitle1">
          Un mini gestionale pensato per aiutare a mantenere i conti di
          un'azienda
        </Typography>
      </AppHeader>

      <Typography>in costruzione...</Typography>
    </React.Fragment>
  );
}
