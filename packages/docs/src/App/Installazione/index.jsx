import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { AppHeader } from "src/Components";

// Routes
import { Docker } from "./Docker";
import { PyPi } from "./PyPi";

// Widgets
import { SetUpWidget } from "./Widget";
export { SetUpWidget };

// Home
export function Installazione(props) {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <React.Fragment>
          <AppHeader mb={3}>
            <Typography variant="h3">Installazione</Typography>
            <Typography variant="subtitle1">
              Scegli come installare minigest
            </Typography>
          </AppHeader>

          <SetUpWidget />
        </React.Fragment>
      </Route>
      <Route path={`${path}/pypi`} component={PyPi} />
      <Route path={`${path}/docker`} component={Docker} />
    </Switch>
  );
}
