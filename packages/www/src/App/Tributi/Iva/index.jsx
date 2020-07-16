import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { AppHeader, AppContent } from "@minigest/ui";

// Routes
import { IvaAliquote } from "./Aliquote";

// Component
import { IvaAliquoteCorrenti } from "./Aliquote/Correnti";

export function Iva() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <AppHeader>
          <Typography variant="h3" component="h1">
            I.V.A.
          </Typography>
        </AppHeader>
        <AppContent>
          <IvaAliquoteCorrenti />
        </AppContent>
      </Route>
      <Route path={`${path}/aliquote`} component={IvaAliquote} />
    </Switch>
  );
}
