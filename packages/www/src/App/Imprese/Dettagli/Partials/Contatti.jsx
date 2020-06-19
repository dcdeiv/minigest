import React from "react";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Card, TableCellHead } from "./Components";

export function Contatti(props) {
  let { email, telefono, fax } = props;

  return (
    <Card titolo="Contatti">
      <Table>
        <TableBody>
          <TableRow>
            <TableCellHead>email</TableCellHead>
            <TableCell>{email || "N.D."}</TableCell>
          </TableRow>
          <TableRow>
            <TableCellHead>telefono</TableCellHead>
            <TableCell>{telefono || "N.D."}</TableCell>
          </TableRow>
          <TableRow>
            <TableCellHead>fax</TableCellHead>
            <TableCell>{fax || "N.D."}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
