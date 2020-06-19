import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";

export function Form(props) {
  const { open, values, error, onClose, onChange, onSubmit } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ name: name, value: value });
  };

  return (
    <Dialog open={open} onClose={onClose} arial-label="form regime fiscale">
      <DialogContent>
        <TextField
          id="codice"
          name="codice"
          margin="normal"
          variant="outlined"
          fullWidth
          label="Codice"
          helperText="il codice del regime fiscale"
          required
          onChange={handleChange}
          value={values.codice.value}
          error={values.codice.error}
        />

        <TextField
          id="descrizione"
          name="descrizione"
          margin="normal"
          variant="outlined"
          fullWidth
          label="Descrizione"
          helperText="la descrizione del regime fiscale"
          required
          onChange={handleChange}
          value={values.descrizione.value}
          error={values.descrizione.error}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Annulla</Button>
        <Button
          onClick={onSubmit}
          color="primary"
          variant="contained"
          disabled={error}
        >
          Salva
        </Button>
      </DialogActions>
    </Dialog>
  );
}
