import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
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

  const handleDateChange = (data) => {
    onChange({ name: "data", value: data });
  };

  return (
    <Dialog open={open} onClose={onClose} arial-label="form tur">
      <DialogContent>
        <KeyboardDatePicker
          id="date"
          name="data"
          label="Data"
          format="YYYY-MM-DD"
          value={values.data.value}
          required
          error={values.data.error}
          invalidDateMessage="data non valida"
          onChange={(date) => handleDateChange(date)}
          disableToolbar
          variant="inline"
          inputVariant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          id="percentuale"
          name="percentuale"
          margin="normal"
          variant="outlined"
          fullWidth
          label="Percentuale"
          helperText="l'ammontare del tasso"
          inputProps={{ step: 0.01, min: 0 }}
          required
          onChange={handleChange}
          value={values.percentuale.value}
          error={values.percentuale.error}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
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
