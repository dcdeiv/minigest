import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// Pagine
import { Scheda } from "./Scheda";

export function Profilo() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={Scheda} />
    </Switch>
  );
}
