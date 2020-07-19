import React from "react";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { AppHeader, AppContent, FabFixed } from "@minigest/ui";
import { LeTueImprese } from "src/Widgets";

// Routes
import { Dettagli } from "./Dettagli";
import { Aggiungi } from "./Aggiungi";

export function Imprese() {
  const history = useHistory();
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <AppHeader>
          <Typography variant="h3" component="h1">
            Imprese
          </Typography>
        </AppHeader>
        <AppContent fabFixed>
          <FabFixed onClick={() => history.push("/imprese/aggiungi")} />
          <LeTueImprese />
        </AppContent>
      </Route>
      <Route path={`${path}/dettagli/:id`} component={Dettagli} />
      <Route path={`${path}/aggiungi`} component={Aggiungi} />
    </Switch>
  );
}
