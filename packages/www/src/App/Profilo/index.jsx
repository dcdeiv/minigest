import React from "react";
import { useSelector } from "react-redux";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppHeader, AppContent } from "@minigest/ui";
import { Info, Accesso } from "./Schede";

const useStyles = makeStyles((theme) => ({
  alertNome: {
    marginTop: theme.spacing(2),
  },
}));

export function Profilo() {
  const classes = useStyles();
  let { dettagli: user } = useSelector((state) => state.utente.utente);

  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="h2">Ciao, {user.nome || "Utente"}!</Typography>
        {!user.nome || !user.cognome ? (
          <Typography variant="body2" className={classes.alertNome}>
            Non hai fornito il tuo nome o il tuo cognome! Inseriscili per
            visualizzarli!
          </Typography>
        ) : null}
      </AppHeader>
      <AppContent>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <Info user={user} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Accesso dettagli={user} />
          </Grid>
        </Grid>
      </AppContent>
    </React.Fragment>
  );
}
