import React from "react";
import { AppHeader, AppContent } from "@minigest/ui";
import { Typography } from "@material-ui/core";

export function Docker() {
  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="overline">Installazione</Typography>
        <Typography variant="h3">Docker</Typography>
        <Typography variant="subtitle1">
          guida all'installazione di minigest attraverso docker
        </Typography>
      </AppHeader>

      <AppContent>
        <Typography>contenuto</Typography>
      </AppContent>
    </React.Fragment>
  );
}
