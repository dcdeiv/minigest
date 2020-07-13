import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import { forEach } from "lodash";

export function FormEmail(props) {
  const { user, open, onClose, onSubmit } = props;
  const inputStyle = {
    variant: "outlined",
    fullWidth: true,
    margin: "normal",
  };

  // Valori form
  const [values, setValues] = React.useState({
    email: {
      ...inputStyle,
      autoFocus: open,
      type: "email",
      id: "form-email",
      label: "Email",
      name: "email",
      value: user.email || "",
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
