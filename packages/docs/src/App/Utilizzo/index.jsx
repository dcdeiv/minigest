import React from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import {
  Typography,
  Box,
  Paper,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import { AppHeader, ListItemLink, LoadingSpinner } from "src/Components";

// Icons
import BusinessIcon from "@material-ui/icons/Business";

const steps = [
  {
    title: "Aggiungi un'impresa",
    path: "imprese",
    Component: React.lazy(() => import("./Impresa")),
    Icon: BusinessIcon,
  },
];

export function Utilizzo(props) {
  const history = useHistory();
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
          </Box>

          <Divider />

          <Box mt={4} mb={4}>
            <List>
              {steps.map((s, i) => {
                return (
                  <ListItemLink key={i} to={`${path}/${s.path}`}>
                    {typeof s.Icon === "object" && (
                      <ListItemIcon>
                        <s.Icon />
                      </ListItemIcon>
                    )}
                    <ListItemText>{s.title}</ListItemText>
                  </ListItemLink>
                );
              })}
            </List>
          </Box>
        </React.Fragment>
      </Route>

      {steps.map((s, i) => {
        return (
          <Route key={i} path={`${path}/${s.path}`}>
            <React.Suspense fallback={<LoadingSpinner />}>
              <s.Component />
            </React.Suspense>
          </Route>
        );
      })}
    </Switch>
  );
}
