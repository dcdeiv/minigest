import React from "react";
import { AppHeader, AppContent, CodeBlock } from "@minigest/ui";
import { Typography } from "@material-ui/core";

// Sezioni
import {
  Introduzione,
  Dipendenze,
  Applicazioni,
  Configurazione,
  Fine,
  Fixtures,
} from "./Sections";
import { Next } from "../Next";

export function PyPi() {
  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="overline">Installazione</Typography>
        <Typography variant="h3">PyPi</Typography>

        <CodeBlock mb={0}>pip install minigest</CodeBlock>
      </AppHeader>

      <AppContent>
        <Introduzione />
        <Dipendenze />
        <Applicazioni />
        <Configurazione />
        <Fine />
        <Fixtures />
        <Next />
      </AppContent>
    </React.Fragment>
  );
}
