import React from "react";
import { Typography, Divider, Box } from "@material-ui/core";
import { AppHeader, CodeBlock } from "src/Components";

// Sezioni
import {
  Introduzione,
  Dipendenze,
  Applicazioni,
  Configurazione,
  Fine,
  Fixtures,
} from "./Sections";

export function PyPi(props) {
  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="overline">Installazione</Typography>
        <Typography variant="h3">PyPi</Typography>

        <Box mt={4}>
          <Box mb={4}>
            <Divider />
          </Box>
          <CodeBlock mb={4}>pip install minigest</CodeBlock>
        </Box>
      </AppHeader>

      <Introduzione id="installazione-pypi-introduzione" />
      <Dipendenze id="installazione-pypi-dipendenze" />
      <Applicazioni id="installazione-pypi-applicazioni" />
      <Configurazione id="installazione-pypi-configurazione" />
      <Fine id="installazione-pypi-fine" />
      <Fixtures id="installazione-pypi-fixtures" />
    </React.Fragment>
  );
}
