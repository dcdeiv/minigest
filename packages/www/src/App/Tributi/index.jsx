import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

// Routes
import { Iva } from "./Iva";

export function Tributi() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/iva`} component={Iva} />
    </Switch>
  );
}
