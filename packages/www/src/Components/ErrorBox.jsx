import React from "react";
import { isEmpty } from "lodash";
import { Container, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const errorTheme = createMuiTheme({
  palette: {
    background: {
      paper: red[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  box: {
    textAlign: "center",
  },
}));

export default function ErrorBox(props) {
  const { container = {}, children } = props;
  const classes = useStyles();
  const containerProps = isEmpty(container) ? { maxWidth: "sm" } : container;

  return (
    <ThemeProvider theme={errorTheme}>
      <Container {...containerProps} style={{ height: "100vh" }}>
        <Box className={classes.box} mt={4}>
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
