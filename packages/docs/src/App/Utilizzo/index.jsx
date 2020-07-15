import React from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { Typography, Box, Paper, Button } from "@material-ui/core";
import { AppHeader, AppContent } from "@minigest/ui";
import { AppSection } from "src/Components";

export function Utilizzo(props) {
  const history = useHistory();
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <React.Fragment>
          <AppHeader>
            <Typography variant="h3">Utilizzo</Typography>
            <Typography variant="subtitle1">
              Guida all'utilizzo di minigest
            </Typography>
          </AppHeader>

          <AppContent>
            <AppSection>
              <Paper>
                <Box p={2}>
                  <Typography gutterBottom variant="h6">
                    Prima di iniziare...
                  </Typography>
                  <Typography>
                    Prima di iniziare assicurati di aver seguito tutti i
                    passaggi dell'installazione e configurazione!
                  </Typography>

                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => history.push("/installazione")}
                    >
                      Installa
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </AppSection>
          </AppContent>
        </React.Fragment>
      </Route>
    </Switch>
  );
}
