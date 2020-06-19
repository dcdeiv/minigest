import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// Paths
import Lista from "./Lista";
import Dettagli from "./Dettagli";

export function Imprese() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={Lista} />
      <Route path={`${path}/:id`} component={Dettagli} />
    </Switch>
  );
}
