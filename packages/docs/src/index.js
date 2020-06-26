import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseLine } from "@material-ui/core";
import { App } from "./App";
import { theme } from "./theme";

ReactDOM.render(
  <IntlProvider locale="it">
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <App />
    </ThemeProvider>
  </IntlProvider>,
  document.getElementById("root")
);
