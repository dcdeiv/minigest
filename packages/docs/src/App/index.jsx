import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "src/Components";

// App
import { Home } from "./Home";
import { Installazione } from "./Installazione";

export function App(props) {
  return (
    <Router basename="/">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/installazione" component={Installazione} />
        </Switch>
      </Layout>
    </Router>
  );
}
