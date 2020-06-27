import React from "react";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Paper,
} from "@material-ui/core";
import { Section, HeaderSection } from "src/Components";

const envs = {
  DEBUG: {
    def: "True",
    desc:
      "Attiva tutti i messaggi di errore. Impostare False per un ambiente di produzione",
  },
  PRODUCTION: { def: "False", desc: "Definisce l'ambiente di produzione" },
  SECRET_KEY: {
    def: "random string",
    desc: "Chiave segreta django (da cambiare)",
  },
  DB_DEFAULT_NAME: { def: "test", desc: "Nome del database" },
  DB_DEFAULT_USER: {
    def: "test",
    desc:
      "Nome dell'utente postgres a cui è stato garantito l'accesso al database",
  },
  DB_DEFAULT_PW: { def: "test", desc: "La password dell'utente postgres" },
  DB_DEFAULT_HOST: {
    def: "localhost",
    desc: "L'host in cui risiede il database",
  },
  DB_DEFAULT_PORT: { def: 5432, desc: "La porta del database" },
};

export function Environment(props) {
  return (
    <Section>
      <HeaderSection>
        <Typography variant="h4">Environment</Typography>
        <Typography variant="subtitle1">
          Lista delle variabili ambientali disponibili
        </Typography>
      </HeaderSection>

      <Paper>
        <Box style={{ overflowX: "auto" }}>
          <Table style={{ whiteSpace: "nowrap" }}>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Default</TableCell>
                <TableCell>Descrizione</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {Object.keys(envs).map((k, i) => {
                let def = envs[k].def;
                let desc = envs[k].desc;
                let len = Object.keys(envs).length;
                let noBorder = { borderBottom: 0 };
                let styles = len === i + 1 ? noBorder : {};

                return (
                  <TableRow key={i}>
                    <TableCell variant="head" style={styles}>
                      {k}
                    </TableCell>
                    <TableCell style={styles}>{def}</TableCell>
                    <TableCell style={styles}>{desc}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </Section>
  );
}
