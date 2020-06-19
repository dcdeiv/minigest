import React from "react";
import { isEmpty } from "lodash";
import { TableRow, TableCell } from "@material-ui/core";
import { TableCellHead } from "./Components";

export function Indirizzo({ variant = "sede", ...rest }) {
  const i = variant === "sede" ? rest.sede : rest.stabile_organizzazione;

  if (i && !isEmpty(i)) {
    let location = i.indirizzo;

    location += i.numero_civico ? `, ${i.numero_civico}` : "";
    location += `, ${i.cap} ${i.comune}`;
    location += i.provincia ? ` ${i.provincia}` : "";
    location += ` - ${i.nazione}`;

    return (
      <TableRow>
        <TableCellHead>{variant.replace("_", " ")}</TableCellHead>
        <TableCell>{location}</TableCell>
      </TableRow>
    );
  } else {
    return null;
  }
}
