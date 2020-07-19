import React from "react";
import { isEmpty } from "lodash";
import {
  Card,
  CardHeader,
  CardContent,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Table } from "@minigest/ui";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    paddingBottom: 0,
  },
  cardContent: {
    padding: 0,
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  tableRow: {
    "&:last-child": {
      "& td": {
        borderBottom: 0,
      },
    },
  },
}));

export function IdFiscali(props) {
  let {
    regime_fiscale,
    id_fiscale_iva_paese,
    id_fiscale_iva_codice,
    codice_fiscale,
    codice_eori,
    rea_ufficio,
    rea_numero,
  } = props;
  const classes = useStyles();

  const TableCellHead = (props) => (
    <TableCell variant="head" style={{ width: 120 }}>
      {props.children}
    </TableCell>
  );

  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        title="Identificativi Fiscali"
      />
      <CardContent className={classes.cardContent}>
        <Table>
          <TableBody>
            <TableRow className={classes.tableRow}>
              <TableCellHead>Partita IVA</TableCellHead>
              <TableCell>
                {id_fiscale_iva_codice && id_fiscale_iva_paese
                  ? [id_fiscale_iva_codice, id_fiscale_iva_paese].join()
                  : "non specificato"}
              </TableCell>
            </TableRow>

            <TableRow className={classes.tableRow}>
              <TableCellHead>Cod. Fiscale</TableCellHead>
              <TableCell>{codice_fiscale || "non specificato"}</TableCell>
            </TableRow>

            <TableRow className={classes.tableRow}>
              <TableCellHead>Regime Fiscale</TableCellHead>
              <TableCell>
                {isEmpty(regime_fiscale)
                  ? "non specificato"
                  : [regime_fiscale.codice, regime_fiscale.descrizione].join(
                      " "
                    )}
              </TableCell>
            </TableRow>

            <TableRow className={classes.tableRow}>
              <TableCellHead>Cod. EORI</TableCellHead>
              <TableCell>{codice_eori || "non specificato"}</TableCell>
            </TableRow>

            <TableRow className={classes.tableRow}>
              <TableCellHead>Cod. REA</TableCellHead>
              <TableCell>
                {rea_ufficio && rea_numero
                  ? [rea_ufficio, rea_numero].join()
                  : "non specificato"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
