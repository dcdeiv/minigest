import React from "react";
import {
  Paper,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

export const fixtures = [
  {
    nome: "InteressiLegali",
    descrizione: "Lista dei punti percentuali degli interessi legali.",
  },
  {
    nome: "RegimeFiscale",
    descrizione: "Lista dei codici dei regimi fiscali.",
  },
  {
    nome: "TassoUfficialeRiferimento",
    descrizione:
      "Lista dei punti percentuali del tasso ufficiale di riferimento (anche conosciuto come TUR).",
  },
  {
    nome: "fisco",
    descrizione:
      "Installa tutte le fixtures dell'applicazione fisco: InteressiLegali, RegimeFiscale TassoUfficialeRiferimento",
  },
];

export function FixturesTable(props) {
  return (
    <Paper>
      <Box style={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fixture</TableCell>
              <TableCell>Descrizione</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {fixtures.map((f, i) => {
              let len = fixtures.length;
              let noBorder = { borderBottom: 0 };
              let styles = len === i + 1 ? noBorder : {};
              return (
                <TableRow key={i}>
                  <TableCell style={styles}>{f.nome}</TableCell>
                  <TableCell style={styles}>{f.descrizione}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
}
