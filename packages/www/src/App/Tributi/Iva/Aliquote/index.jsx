import React from "react";
import { Typography } from "@material-ui/core";
import { AppHeader, AppContent, AppSection } from "@minigest/ui";

// Componenti
import { IvaAliquoteCorrenti } from "./Correnti";
import { ListaCompleta } from "./ListaCompleta";

export function IvaAliquote(props) {
  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="h3" component="h1">
          Aliquote IVA
        </Typography>
      </AppHeader>
      <AppContent fabFixed>
        <AppSection>
          <IvaAliquoteCorrenti />
        </AppSection>
        <ListaCompleta />
      </AppContent>
    </React.Fragment>
  );
}
