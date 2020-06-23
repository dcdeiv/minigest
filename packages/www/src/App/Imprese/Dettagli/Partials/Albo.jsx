import React from "react";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Card, TableCellHead } from "./Components";

export function Albo(props) {
  let {
    albo_professionale,
    albo_provincia,
    albo_numero_iscrizione,
    albo_data_iscrizione,
  } = props;

  if (!albo_professionale) {
    return null;
  } else {
    return (
      <Card titolo="Albo Professionale">
        <Table>
          <TableBody>
            <TableRow>
              <TableCellHead>Albo</TableCellHead>
              <TableCell>{albo_professionale}</TableCell>
            </TableRow>
            <TableRow>
              <TableCellHead>Provincia</TableCellHead>
              <TableCell>{albo_provincia}</TableCell>
            </TableRow>
            <TableRow>
              <TableCellHead>Numero iscrizione</TableCellHead>
              <TableCell>{albo_numero_iscrizione}</TableCell>
            </TableRow>
            <TableRow>
              <TableCellHead>Data iscrizione</TableCellHead>
              <TableCell>{albo_data_iscrizione}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    );
  }
}
