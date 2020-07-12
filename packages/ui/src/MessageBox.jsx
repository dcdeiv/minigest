import React from "react";
import { isEmpty } from "lodash";
import { Container, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { red, orange } from "@material-ui/core/colors";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const errorTheme = createMuiTheme({
  palette: {
    background: {
      paper: red[500],
    },
  },
});

const warningTheme = createMuiTheme({
  palette: {
    background: {
      paper: orange[500],
    },
  },
});

const useStyles = makeStyles({
  box: {
    textAlign: "center",
  },
});

export default function MessageBox(props) {
  const { container = {}, children, variant = "error" } = props;
  const classes = useStyles();
  const containerProps = isEmpty(container) ? { maxWidth: "sm" } : container;

  const themes = {
    error: errorTheme,
    warning: warningTheme,
  };

  return (
    <ThemeProvider theme={themes[variant]}>
      <Container {...containerProps}>
        <Box className={classes.box}>
          <Paper style={{ width: "100%" }}>
            <Box p={2} style={{ width: "100%" }}>
              {children}
            </Box>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
