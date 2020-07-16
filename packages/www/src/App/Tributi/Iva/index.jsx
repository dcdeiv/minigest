import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

// Routes
import { IvaAliquote } from "./Aliquote";

export function Iva() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/aliquote`} component={IvaAliquote} />
    </Switch>
  );
}
