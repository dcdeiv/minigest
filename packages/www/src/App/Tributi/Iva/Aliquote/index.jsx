import React from "react";
import { Typography } from "@material-ui/core";
import { AppHeader, AppContent } from "@minigest/ui";

// Componenti
import { IvaAliquoteCorrenti } from "./Correnti";

export function IvaAliquote(props) {
  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="h3" component="h1">
          Aliquote IVA
        </Typography>
      </AppHeader>
      <AppContent fabFixed>
        <IvaAliquoteCorrenti />
      </AppContent>
    </React.Fragment>
  );
}
