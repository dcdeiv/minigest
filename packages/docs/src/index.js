import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, IconButton } from "@material-ui/core";
import { theme, Layout } from "@minigest/ui";
import App from "./App";
import GitHubIcon from "@material-ui/icons/GitHub";
import { AppDrawer } from "src/Components";

const GitHubButton = () => (
  <IconButton
    color="inherit"
    edge="end"
    onClick={() =>
      window.open("https://github.com/ctrlmaniac/minigest", "_blank")
    }
  >
    <GitHubIcon />
  </IconButton>
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router basename="/">
      <Layout drawer={AppDrawer} action={<GitHubButton />}>
        <App />
      </Layout>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
