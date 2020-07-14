import React from "react";
import { Typography, Link, Paper, Box, Container } from "@material-ui/core";
import { AppSection, AppSectionHeader } from "src/Components";

export function Introduzione() {
  return (
    <AppSection>
      <AppSectionHeader>
        <Typography variant="h4">Introduzione</Typography>
      </AppSectionHeader>

      <Typography gutterBottom>
        Il pacchetto non contiene tutto il progetto django ma solo la collezione
        delle applicazioni django che possono essere installate a seconda di
        come deve essere il vostro progetto!
      </Typography>
      <Typography gutterBottom>
        Un esempio di come può essere utilizzato <b>minigest</b> lo potete
        trovare nella cartella{" "}
        <Link
          href="https://github.com/ctrlmaniac/minigest/tree/main/webapp"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
        >
          webapp
        </Link>
        .
      </Typography>

      <Container maxWidth="md">
        <Box mt={4}>
          <Paper>
            <Box p={2}>
              <Typography>
                <b>ATTENZIONE!</b> È importante sapere che minigest sovrascrive
                il modello django <em>User</em>, quindi va installato prima di
                eseguire la primissima migrazione dei modelli!
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </AppSection>
  );
}
