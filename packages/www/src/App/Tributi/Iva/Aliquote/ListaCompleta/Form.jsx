import React from "react";
import moment from "moment";
import { isEmpty, filter, forEach } from "lodash";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { tipiAliquote } from "../tipi";

export function Form(props) {
  let { open, onClose, onSubmit, defaultValues } = props;
  const [formError, setFormError] = React.useState(true);
  const [values, setValues] = React.useState(defaultValues);

  // aggiorna i valori se questi cambiano
  // fix quando viene richiesta la modifica di un oggetto
  React.useEffect(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  // Controlla che il form sia valido
  React.useEffect(() => {
    const errorFormObj = filter(values, ["error", true]);

    setFormError(!isEmpty(errorFormObj));
  }, [values]);

  const handleDateChange = (date) => {
    setValues({
      ...values,
      data: {
        ...values.data,
        value: date,
        error: isEmpty(date) ? true : false,
      },
    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: {
        ...values[name],
        value: value,
        error: isEmpty(value) ? true : false,
      },
    });
  };

  const handleSubmit = () => {
    if (!formError) {
      const formValues = values;
      let object = {};
      forEach(formValues, (v, k) => {
        if (k === "id") {
          object["id"] = v;
        } else {
          if (k === "data") {
            object[k] = moment(v.value).format("YYYY-MM-DD");
          } else {
            object[k] = v.value;
          }
        }
      });

      onClose();
      onSubmit(object);
      setValues({ ...defaultValues });
    }
  };

  const preventSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogContent>
        <form noValidate onSubmit={preventSubmit}>
          <KeyboardDatePicker
            id="date"
            name="data"
            label="Data"
            format="YYYY-MM-DD"
            value={values.data.value}
            error={values.data.error}
            required
            invalidDateMessage="data non valida"
            onChange={(date) => handleDateChange(date)}
            disableToolbar
            variant="inline"
            inputVariant="outlined"
            margin="normal"
            fullWidth
          />

          <FormControl variant="outlined" margin="normal" fullWidth>
            <InputLabel id="descrizione-label">Descrizione</InputLabel>
            <Select
              labelId="descrizione-label"
              id="descrizion"
              value={values.descrizione.value}
              label="Descrizione"
              name="descrizione"
              onChange={handleChange}
            >
              {Object.keys(tipiAliquote).map((k, i) => (
                <MenuItem key={i} value={k}>
                  {tipiAliquote[k]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="aliquota"
            name="aliquota"
            margin="normal"
            variant="outlined"
            fullWidth
            label="Aliquota"
            helperText="l'ammontare del'aliquota"
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
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          annulla
        </Button>
        <Button
          onClick={handleSubmit}
          color="secondary"
          variant="contained"
          disabled={formError}
        >
          salva
        </Button>
      </DialogActions>
    </Dialog>
  );
}
