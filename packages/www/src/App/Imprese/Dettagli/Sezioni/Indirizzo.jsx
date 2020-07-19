import React from "react";
import { isEmpty } from "lodash";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    paddingBottom: 0,
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 16,
    },
  },
}));

export function Indirizzo({ indirizzo, titolo = "Sede" }) {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader className={classes.cardHeader} title={titolo} />
      <CardContent className={classes.cardContent}>
        <Typography>
          {isEmpty(indirizzo)
            ? "Aggiungi indirizzo"
            : [
                indirizzo.indirizzo,
                indirizzo.numero_civico,
                indirizzo.cap,
                indirizzo.comune,
                indirizzo.provincia,
                indirizzo.nazione,
              ].join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}
