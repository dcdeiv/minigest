import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { Provider as ReduxProvider } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { store } from "src/store";
import { history, theme } from "src/helpers";
import * as serviceWorker from "src/serviceWorker";
import "moment/locale/it";

// Pages
import App from "./App";
import { Accedi } from "./Accedi";

moment.locale("it");

ReactDOM.render(
  <IntlProvider locale="it">
    <MuiPickersUtilsProvider
      libInstance={moment}
      utils={MomentUtils}
      locale="it"
    >
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router history={history}>
            <Switch>
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
              <Route path="/" component={App} />
            </Switch>
          </Router>
        </ThemeProvider>
      </ReduxProvider>
    </MuiPickersUtilsProvider>
  </IntlProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
