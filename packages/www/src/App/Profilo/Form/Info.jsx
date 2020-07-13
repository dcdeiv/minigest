import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import { forEach } from "lodash";

export function FormInfo(props) {
  const { user, open, onClose, onSubmit } = props;
  const inputStyle = {
    variant: "outlined",
    fullWidth: true,
    margin: "normal",
  };

  // Valori form
  const [values, setValues] = React.useState({
    nome: {
      ...inputStyle,
      autoFocus: open,
      id: "form-info-nome",
      label: "Nome",
      name: "nome",
      value: user.nome || "",
    },
    cognome: {
      ...inputStyle,
      id: "form-info-cognome",
      label: "Cognome",
      name: "cognome",
      value: user.cognome || "",
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
      id: user.id,
    };

    forEach(values, (o) => {
      let { name, value } = o;
      newValues[name] = value;
    });

    onSubmit(newValues);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <form noValidate autoComplete="off">
          {Object.keys(values).map((k, i) => {
            const currentValues = values[k];
            return (
              <TextField key={i} {...currentValues} onChange={handleChange} />
            );
          })}
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          salva
        </Button>
      </DialogActions>
    </Dialog>
  );
}
