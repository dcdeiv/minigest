import React from "react";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Card, TableCellHead } from "./Components";

export function RecapitiFiscali(props) {
  let { codice_destinatario, pec, riferimento_amministrazione } = props;

  return (
    <Card titolo="Recapiti Fiscali">
      <Table>
        <TableBody>
          <TableRow>
            <TableCellHead>Codice Destinatario</TableCellHead>
            <TableCell>{codice_destinatario || "0000000"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCellHead>PEC</TableCellHead>
            <TableCell>{pec || "N.D."}</TableCell>
          </TableRow>
          <TableRow>
            <TableCellHead>Rif. Amministrazione</TableCellHead>
            <TableCell>{riferimento_amministrazione || "N.D."}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
