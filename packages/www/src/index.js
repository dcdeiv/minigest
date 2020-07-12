import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

// Contrib
import { theme } from "@minigest/ui";

// Local
import Accedi from "./Accedi";
import App from "./App";
import { store } from "src/state";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* ACCEDI */}
        <Route strict path="/accedi/" component={Accedi} />
        <Route path="/accedi">
          <Redirect to="/accedi/" />
        </Route>

        {/* ESCI */}
        <Route path="/esci">
          <Redirect to="/esci/" />
        </Route>

        {/* APP */}
        <Route path="*" component={App} />
      </Router>
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
