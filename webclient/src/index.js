import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { IntlProvider } from "react-intl";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import * as serviceWorker from "~/serviceWorker";
import { theme } from "~/Layout";
import { store } from "~/store";
import App from "~/App";

ReactDOM.render(
  <IntlProvider locale={navigator.language}>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </IntlProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
