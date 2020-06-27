import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// Routes
import { Docker } from "./Docker";
import { PyPi } from "./PyPi";

// Widgets
export { SetUpWidget } from "./Widget";

export function Installazione(props) {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/pypi`} component={PyPi} />
      <Route path={`${path}/docker`} component={Docker} />
    </Switch>
  );
}
