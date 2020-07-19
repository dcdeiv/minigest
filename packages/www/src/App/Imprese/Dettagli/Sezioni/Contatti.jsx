import React from "react";
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

export function Contatti(props) {
  let { email, telefono, fax } = props;
  const classes = useStyles();

  const TableCellHead = (props) => (
    <TableCell variant="head" style={{ width: 120 }}>
      {props.children}
    </TableCell>
  );

  return (
    <Card>
      <CardHeader className={classes.cardHeader} title="Contatti" />
      <CardContent className={classes.cardContent}>
        <Table>
          <TableBody>
            <TableRow className={classes.tableRow}>
              <TableCellHead>Email</TableCellHead>
              <TableCell>{email || "non specificato"}</TableCell>
            </TableRow>

            <TableRow className={classes.tableRow}>
              <TableCellHead>Tel</TableCellHead>
              <TableCell>{telefono || "non specificato"}</TableCell>
            </TableRow>

            <TableRow className={classes.tableRow}>
              <TableCellHead>Fax</TableCellHead>
              <TableCell>{fax || "non specificato"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
