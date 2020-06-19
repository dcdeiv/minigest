import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import { Provider as ReduxProvider } from "react-redux";
import { IntlProvider } from "react-intl";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import * as serviceWorker from "~/serviceWorker";
import { theme } from "~/Layout";
import { store } from "~/store";
import App from "~/App";
import "moment/locale/it";

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
          <App />
        </ThemeProvider>
      </ReduxProvider>
    </MuiPickersUtilsProvider>
  </IntlProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
