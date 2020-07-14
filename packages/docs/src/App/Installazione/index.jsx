import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { AppHeader, AppContent } from "@minigest/ui";
import { Typography } from "@material-ui/core";

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

          <AppContent>
            <SetUpWidget />
          </AppContent>
        </React.Fragment>
      </Route>
      <Route path={`${path}/pypi`} component={PyPi} />
      <Route path={`${path}/docker`} component={Docker} />
    </Switch>
  );
}
