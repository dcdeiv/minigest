import React from "react";
import { isEmpty } from "lodash";
import { Percentuale, LoadingSpinner, ListaVuota } from "~/Components";
import {
  TableContainer,
  Paper,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";

export function Lista(props) {
  const { subject, results, getting } = props;

  const descrizione = {
    O: "Ordinaria",
    R: "Ridotta",
    M: "Minima",
    E: "Esente",
  };

  return getting ? (
    <LoadingSpinner />
  ) : isEmpty(results) ? (
    <ListaVuota message={`Non ci sono ${subject.toLowerCase()}`} />
  ) : (
    <Paper>
      <Box p={2}>
        <Typography variant="h6" component="h2">
          {subject}
        </Typography>
      </Box>

      <TableContainer component={Paper} style={{ maxHeight: 321 }}>
        <Table aria-label="aliquote iva">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Descrizione</TableCell>
              <TableCell align="right">Aliquota</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {results.map((aliquota) => (
              <TableRow key={aliquota.id}>
                <TableCell>{aliquota.data}</TableCell>
                <TableCell>{descrizione[aliquota.descrizione]}</TableCell>
                <TableCell align="right">
                  <Percentuale value={parseFloat(aliquota.aliquota)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
