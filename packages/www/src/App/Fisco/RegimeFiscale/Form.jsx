import React from "react";
import { isEmpty, filter, forEach } from "lodash";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";

export function Form(props) {
  let { open, onClose, onSubmit, defaultValues } = props;
  const [formError, setFormError] = React.useState(true);
  const [values, setValues] = React.useState(defaultValues);

  // aggiorna i valori se questi cambiano
  // fix quando viene richiesta la modifica di un oggetto
  React.useEffect(() => {
    setValues(defaultValues);
  }, [defaultValues]);

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
          object[k] = v.value;
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
