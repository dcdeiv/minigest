import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { AppHeader, AppContent } from "@minigest/ui";
import { LeTueImprese } from "src/Widgets";

// Routes
import { Dettagli } from "./Dettagli";

export function Imprese() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <AppHeader>
          <Typography variant="h3" component="h1">
            Imprese
          </Typography>
        </AppHeader>
        <AppContent>
          <LeTueImprese />
        </AppContent>
      </Route>
      <Route path={`${path}/dettagli/:id`} component={Dettagli} />
    </Switch>
  );
}
