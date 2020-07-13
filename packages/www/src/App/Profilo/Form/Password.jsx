import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import { forEach } from "lodash";

export function FormPassword(props) {
  const { userId, open, onClose, onSubmit } = props;
  const inputStyle = {
    variant: "outlined",
    fullWidth: true,
    margin: "normal",
    type: "password",
  };

  // Valori form
  const [values, setValues] = React.useState({
    nome: {
      ...inputStyle,
      autoFocus: open,
      id: "form-old-password",
      label: "Password attuale",
      name: "old_password",
      value: "",
    },
    cognome: {
      ...inputStyle,
      id: "form-new-password",
      label: "Nuova password",
      name: "new_password",
      value: "",
    },
  });

  const handleChange = function (e) {
    let { name, value } = e.target;

    setValues({
      ...values,
      [name]: {
        ...values[name],
        value: value,
      },
    });
  };

  const handleSubmit = function () {
    let newValues = {
      id: userId,
    };

    forEach(values, (o) => {
      let { name, value } = o;
      newValues[name] = value;
    });

    onSubmit(newValues);
    onClose();
  };

  const preventFormSubmit = (e) => {
    e.preventDefault();

    handleSubmit();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogContent>
        <form noValidate autoComplete="off" onSubmit={preventFormSubmit}>
          {Object.keys(values).map((k, i) => {
            const currentValues = values[k];
            return (
              <TextField key={i} {...currentValues} onChange={handleChange} />
            );
          })}
        </form>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => onClose()}>
          annulla
        </Button>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          salva
        </Button>
      </DialogActions>
    </Dialog>
  );
}
