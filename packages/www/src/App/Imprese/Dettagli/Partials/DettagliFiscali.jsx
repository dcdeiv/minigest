import React from "react";
import { isEmpty } from "lodash";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Card, TableCellHead } from "./Components";

export function DettagliFiscali(props) {
  let {
    regime_fiscale,
    id_fiscale_iva_paese,
    id_fiscale_iva_codice,
    codice_fiscale,
    codice_eori,
    rea_ufficio,
    rea_numero,
  } = props;

  const rf = isEmpty(regime_fiscale)
    ? "N.D."
    : `${regime_fiscale.codice} - ${regime_fiscale.descrizione}`;

  const iva_paese = id_fiscale_iva_paese || "";
  const iva_codice = id_fiscale_iva_codice || "";

  const iva =
    !id_fiscale_iva_paese && !id_fiscale_iva_codice
      ? "N.D."
      : iva_paese + iva_codice;

  const rea = (rea_ufficio || "") + " - " + (rea_numero || "");

  return (
    <Card titolo="Dettagli Fiscali">
      <Table>
        <TableBody>
          <TableRow>
            <TableCellHead>Regime Fiscale</TableCellHead>
            <TableCell>{rf}</TableCell>
          </TableRow>
          <TableRow>
            <TableCellHead>REA</TableCellHead>
            <TableCell>
              {((rea_ufficio || rea_numero) && rea) || "N.D."}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCellHead>P.IVA</TableCellHead>
            <TableCell>{iva}</TableCell>
          </TableRow>
          <TableRow>
            <TableCellHead>C.F.</TableCellHead>
            <TableCell>{codice_fiscale || "N.D."}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">EORI</TableCell>
            <TableCell>{codice_eori || "N.D."}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
