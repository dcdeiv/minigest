import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Typography,
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

export function Albo(props) {
  let {
    albo_professionale: nome,
    albo_provincia: provincia,
    albo_numero_iscrizione: numero,
    albo_data_iscrizione: data,
  } = props;
  const classes = useStyles();

  const TableCellHead = (props) => (
    <TableCell variant="head" style={{ width: 120 }}>
      {props.children}
    </TableCell>
  );

  return (
    <Card>
      <CardHeader className={classes.cardHeader} title="Albo Professionale" />
      <CardContent className={classes.cardContent}>
        {nome && provincia && numero && data ? (
          <Table>
            <TableBody>
              <TableRow className={classes.tableRow}>
                <TableCellHead>Nome</TableCellHead>
                <TableCell>{nome || "non specificato"}</TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCellHead>Riferimento</TableCellHead>
                <TableCell>
                  {provincia && numero
                    ? [provincia, numero].join()
                    : "non specificato"}
                </TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCellHead>Data iscrizione</TableCellHead>
                <TableCell>{data || "non specificato"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <Box p={2}>
            <Typography>Aggiungi albo professionale</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
