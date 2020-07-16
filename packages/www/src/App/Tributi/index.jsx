import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { AppHeader, AppContent } from "@minigest/ui";
import { Typography, List, ListItemText } from "@material-ui/core";
import { ListItemLink } from "src/Components";

// Routes
import { Iva } from "./Iva";

export function Tributi() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <AppHeader>
          <Typography variant="h3" component="h1">
            Tributi
          </Typography>
          <Typography variant="subtitle1">tributi, tasse e imposte</Typography>
        </AppHeader>
        <AppContent>
          <List>
            <ListItemLink to={`${path}/iva`}>
              <ListItemText>IVA</ListItemText>
            </ListItemLink>
          </List>
        </AppContent>
      </Route>
      <Route path={`${path}/iva`} component={Iva} />
    </Switch>
  );
}
