import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { IntlProvider } from "react-intl";
import { Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

// Local
import * as serviceWorker from "~/serviceWorker";
import { theme } from "~/Layout";
import { history } from "~/helpers";
import { store } from "~/store";

// App
import App from "~/App";
import NotFound from "~/NotFound";

ReactDOM.render(
  <IntlProvider locale="it">
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ReduxProvider>
  </IntlProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
