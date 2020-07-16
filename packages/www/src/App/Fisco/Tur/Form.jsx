import React from "react";
import moment from "moment";
import { isEmpty, filter, forEach } from "lodash";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

export function Form(props) {
  let { open, onClose, onSubmit, defaultValues } = props;
  const [formError, setFormError] = React.useState(true);
  const [values, setValues] = React.useState(defaultValues);

  // aggiorna i valori se questi cambiano
  // fix quando viene richiesta la modifica di un oggetto
  React.useEffect(() => {
    setValues(defaultValues);
  }, [defaultValues]);

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
    let { value } = e.target;
    setValues({
      ...values,
      percentuale: {
        ...values.percentuale,
        value: value,
        error: isEmpty(value) ? true : false,
      },
    });
  };

  // Controlla che il form sia valido
  React.useEffect(() => {
    const errorFormObj = filter(values, ["error", true]);

    setFormError(!isEmpty(errorFormObj));
  }, [values]);

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

      onSubmit(object);
      setValues({ ...defaultValues });
    }
  };

  const handleReset = () => {
    setValues({ ...defaultValues });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <form noValidate onSubmit={handleSubmit}>
          <KeyboardDatePicker
            id="date"
            name="data"
            label="Data"
            format="YYYY-MM-DD"
            value={values.data.value}
            required
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
        </form>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleReset}>
          annulla
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disabled={formError}
          onClick={handleSubmit}
        >
          salva
        </Button>
      </DialogActions>
    </Dialog>
  );
}
