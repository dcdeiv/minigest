import React from "react";
import { AppHeader, AppContent, CodeBlock } from "@minigest/ui";
import { Typography } from "@material-ui/core";

// Sezioni
import { Introduzione, Tags, Environment, Fixtures } from "./Sections";
import { Next } from "../Next";

export function Docker() {
  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="overline">Installazione</Typography>
        <Typography variant="h3">Docker</Typography>

        <CodeBlock mb={0}>docker pull ctrlmaniac/minigest:latest</CodeBlock>
      </AppHeader>

      <AppContent>
        <Introduzione />
        <Tags />
        <Environment />
        {/** SEZIONI
         * - compose
         */}
        <Fixtures />
        <Next />
      </AppContent>
    </React.Fragment>
  );
}
