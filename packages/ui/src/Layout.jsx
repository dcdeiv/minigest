import React from "react";
import { AppBar, Toolbar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  offset: theme.mixins.toolbar;
});

export function Layout({ children }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>ciao</Toolbar>
      </AppBar>

      <div>
        <div className={classes.offset}></div>
        {children}
      </div>
    </React.Fragment>
  );
}
