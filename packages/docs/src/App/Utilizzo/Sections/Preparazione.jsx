import React from "react";
import { Typography } from "@material-ui/core";
import { Section, AppHeader } from "src/Components";

export function Preparazione(props) {
  return (
    <Section>
      <AppHeader>
        <Typography variant="h3">Utilizzo</Typography>
      </AppHeader>

      <Section mt={4}>
        <AppHeader>
          <Typography variant="h6">Prima di iniziare...</Typography>
        </AppHeader>

        <Typography>
          Prima di iniziare, completa tutti i passaggi dell'installazione di
          minigest.
        </Typography>
      </Section>
    </Section>
  );
}
