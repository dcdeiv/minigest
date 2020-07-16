import React from "react";
import { Typography } from "@material-ui/core";
import { AppHeader, AppContent } from "@minigest/ui";

export function IvaAliquote(props) {
  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="h3" component="h1">
          Aliquote IVA
        </Typography>
      </AppHeader>
      <AppContent>
        <Typography>contenuto</Typography>
      </AppContent>
    </React.Fragment>
  );
}
