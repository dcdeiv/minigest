import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import {
  Typography,
  Box,
  Paper,
  Divider,
  List,
  ListItemText,
} from "@material-ui/core";
import { AppHeader, ListItemLink } from "src/Components";

export function Utilizzo(props) {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <React.Fragment>
          <AppHeader mb={4}>
            <Typography variant="h3">Utilizzo</Typography>
            <Typography variant="subtitle1">
              Guida all'utilizzo di minigest
            </Typography>
          </AppHeader>

          <Box mb={4}>
            <Paper>
              <Box p={2}>
                <Typography gutterBottom variant="h6">
                  Prima di iniziare...
                </Typography>
                <Typography>
                  Prima di iniziare assicurati di aver seguito tutti i passaggi
                  dell'installazione e configurazione!
                </Typography>
              </Box>
            </Paper>
          </Box>

          <Divider />

          <Box mt={4} mb={4}>
            <List>
              <ListItemLink to="/">
                <ListItemText>Creazione della tua impresa</ListItemText>
              </ListItemLink>
            </List>
          </Box>
        </React.Fragment>
      </Route>
    </Switch>
  );
}
