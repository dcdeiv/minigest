import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "~/helpers";

// Local
import App, { NotFound } from "~/App";
import * as serviceWorker from "~/serviceWorker";
import { theme } from "~/Layout";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
