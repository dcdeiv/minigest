import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Layout } from "@minigest/ui";
import { AppDrawer } from "src/Components";

// External Routes
import Accedi from "./Accedi.jsx";

// Route
import { Home } from "./Home.jsx";

export { Accedi };
export function App() {
  let { path } = useRouteMatch();

  return (
    <Layout drawer={AppDrawer}>
      <Switch>
        <Route exact path={path} component={Home} />
      </Switch>
    </Layout>
  );
}
