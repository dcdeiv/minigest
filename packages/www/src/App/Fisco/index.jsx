import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { AppHeader, AppContent } from "@minigest/ui";
import { Typography } from "@material-ui/core";

// Section
import { InteressiLegali } from "./InteressiLegali";
import { RegimeFiscale } from "./RegimeFiscale";
import { Tur } from "./Tur";

const paths = {
  "interessi-legali": {
    titolo: "Interessi Legali",
    component: InteressiLegali,
  },
  "regime-fiscale": {
    titolo: "Regime Fiscale",
    component: RegimeFiscale,
  },
  "tasso-ufficiale-riferimento": {
    titolo: "Tasso Ufficiale di Riferimento",
    component: Tur,
  },
};

export function Fisco() {
  let { path } = useRouteMatch();

  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="h3" component="h1">
          <Switch>
            {Object.keys(paths).map((k, i) => {
              return (
                <Route exact key={i} path={`${path}/${k}`}>
                  {paths[k].titolo}
                </Route>
              );
            })}
          </Switch>
        </Typography>
      </AppHeader>
      <AppContent fabFixed>
        <Switch>
          {Object.keys(paths).map((k, i) => {
            const Component = paths[k].component;

            return (
              <Route
                exact
                key={i}
                path={`${path}/${k}`}
                component={Component}
              />
            );
          })}
        </Switch>
      </AppContent>
    </React.Fragment>
  );
}
