import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";

const themeError = createMuiTheme({
  palette: {
    background: {
      paper: red[500],
    },
    text: { primary: "#F8F8F8" },
  },
});

const themeSuccess = createMuiTheme({
  palette: {
    background: {
      paper: green[500],
    },
    text: { primary: "#2B2B2B" },
  },
});

export function PwChangeDismiss(props) {
  let { open, handleClose, response, error } = props;

  return (
    <ThemeProvider theme={error ? themeError : themeSuccess}>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography>{response || "Qualcosa non va!"}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
