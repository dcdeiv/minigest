import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "src/Components";

// App
import { Home } from "./Home";

export function App(props) {
  return (
    <Router basename="/">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}
