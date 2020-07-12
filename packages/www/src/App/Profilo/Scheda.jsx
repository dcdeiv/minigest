import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/Styles";
import { AppHeader, AppContent } from "@minigest/ui";

const useStyles = makeStyles((theme) => ({
  alertNome: {
    marginTop: theme.spacing(2),
  },
}));

export function Scheda() {
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          eligendi pariatur possimus, in neque officia! Ea assumenda, sunt unde
          id nobis praesentium eum tempore maiores doloremque dolor quisquam
          voluptas eligendi?
        </p>
      </AppContent>
    </React.Fragment>
  );
}
