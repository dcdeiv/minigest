import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const dialogTheme = createMuiTheme({
  palette: {
    background: {
      paper: red[500],
    },
  },
});

export default function ConfirmDelete({
  id,
  title,
  content,
  status,
  handleUnset,
  handleSubmit,
}) {
  return (
    <ThemeProvider theme={dialogTheme}>
      <Dialog open={status} onClose={handleUnset} aria-labelledby={id}>
        <DialogTitle id={id}>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button onClick={handleUnset}>annulla</Button>
          <Button onClick={handleSubmit} variant="contained">
            elimina
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
