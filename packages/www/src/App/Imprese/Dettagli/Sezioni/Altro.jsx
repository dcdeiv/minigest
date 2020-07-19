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

export function Altro(props) {
  let { riferimento_amministrazione } = props;
  const classes = useStyles();

  const TableCellHead = (props) => (
    <TableCell variant="head" style={{ width: 200 }}>
      {props.children}
    </TableCell>
  );

  return (
    <Card>
      <CardHeader className={classes.cardHeader} title="Altro" />
      <CardContent className={classes.cardContent}>
        <Table>
          <TableBody>
            <TableRow className={classes.tableRow}>
              <TableCellHead>Rif. Amministrazione</TableCellHead>
              <TableCell>
                {riferimento_amministrazione || "non specificato"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
