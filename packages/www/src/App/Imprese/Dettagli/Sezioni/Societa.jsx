import React from "react";
import { filter } from "lodash";
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
import { Table, Euro } from "@minigest/ui";

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

export function Societa(props) {
  let { capitale_sociale, socio_unico, stato_liquidazione, options } = props;
  let { socio_unico: suOptions, stato_liquidazione: slOptions } = options;
  const classes = useStyles();

  const TableCellHead = (props) => (
    <TableCell variant="head" style={{ width: 150 }}>
      {props.children}
    </TableCell>
  );

  const su = filter(suOptions.choices, (o) => o.value === socio_unico);
  const sl = filter(slOptions.choices, (o) => o.value === stato_liquidazione);

  return (
    <Card>
      <CardHeader className={classes.cardHeader} title="Dati Societari" />
      <CardContent className={classes.cardContent}>
        {capitale_sociale || socio_unico || stato_liquidazione ? (
          <Table>
            <TableBody>
              <TableRow className={classes.tableRow}>
                <TableCellHead>Capitale Sociale</TableCellHead>
                <TableCell>
                  {capitale_sociale ? (
                    <Euro value={capitale_sociale} />
                  ) : (
                    "non specificato"
                  )}
                </TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCellHead>Socio Unico</TableCellHead>
                <TableCell>
                  {!socio_unico
                    ? "non specificato"
                    : `${socio_unico} - ${su[0].display_name}`}
                </TableCell>
              </TableRow>

              <TableRow className={classes.tableRow}>
                <TableCellHead>Socio Unico</TableCellHead>
                <TableCell>
                  {!stato_liquidazione
                    ? "non specificato"
                    : `${stato_liquidazione} - ${sl[0].display_name}`}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <Box p={2}>
            <Typography>Aggiungi dati societari</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
