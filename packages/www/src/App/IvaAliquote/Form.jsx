import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";

export function Form(props) {
  const { open, options, values, error, onClose, onChange, onSubmit } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ name: name, value: value });
  };

  const handleDateChange = (data) => {
    onChange({ name: "data", value: data });
  };

  return (
    <Dialog open={open} onClose={onClose} arial-label="form aliquota iva">
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
          id="aliquota"
          name="aliquota"
          margin="normal"
          variant="outlined"
          fullWidth
          label="Aliquota"
          helperText="l'ammontare dell'aliquota"
          inputProps={{ step: 0.01, min: 0 }}
          required
          onChange={handleChange}
          value={values.aliquota.value}
          error={values.aliquota.error}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <FormControl
          fullWidth
          margin="normal"
          variant="outlined"
          required
          error={values.descrizione.error}
        >
          <InputLabel id="descrizione-aliquoteiva-label">
            Descrizione
          </InputLabel>
          <Select
            labelId="descrizione-aliquoteiva-label"
            id="descrizione-aliquoteiva"
            defaultValue="O"
            label="Descrizione"
            name="descrizione"
            value={values.descrizione.value}
            renderValue={(value) => options[value]}
            onChange={handleChange}
          >
            {Object.keys(options).map((k, i) => {
              const descrizione = options[k];

              return (
                <MenuItem key={i} value={k}>
                  {descrizione}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
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
