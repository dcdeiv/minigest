import React from "react";
import { Box, Typography, Divider } from "@material-ui/core";
import { AppHeader, CodeBlock } from "src/Components";

// Sezioni
import { Introduzione } from "./Introduzione";
import { Tags } from "./Tags";
import { Environment } from "./Environment";
import { Compose } from "./Compose";

export function Docker(props) {
  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="overline">Installazione</Typography>
        <Typography variant="h3">Docker</Typography>

        <Box mt={4}>
          <Box mb={4}>
            <Divider />
          </Box>
          <CodeBlock>docker pull dcdeiv/minigest:latest</CodeBlock>
        </Box>
      </AppHeader>

      <Introduzione id="installazione-docker-introduzione" />
      <Tags id="installazione-docker-tags" />
      <Environment id="installazione-docker-environment" />
      <Compose id="installazione-docker-compose" />
    </React.Fragment>
  );
}
