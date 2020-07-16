import React from "react";
import {
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import { Table, AppSection, AppSectionHeader } from "@minigest/ui";

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
};

export function Environment(props) {
  return (
    <AppSection>
      <AppSectionHeader>
        <Typography variant="h4">Environment</Typography>
        <Typography variant="subtitle1">
          Lista delle variabili ambientali disponibili
        </Typography>
      </AppSectionHeader>

      <Paper>
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
      </Paper>
    </AppSection>
  );
}
