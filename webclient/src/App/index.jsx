import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "~/helpers";

// App
import { Dashboard } from "./Dashboard";
import { NotFound } from "./NotFound";
import { Accedi } from "./Auth";
import { IvaAliquote } from "./Iva";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/tributi/iva/aliquote" component={IvaAliquote} />

        <Route path="/accedi" component={Accedi} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
