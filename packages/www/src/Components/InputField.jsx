import React from "react";
import { TextField } from "@material-ui/core";

export default function InputField(props) {
  let { options, onChange } = props;

  return (
    <TextField
      fullWidth
      type={options.type}
      variant="outlined"
      name={options.name}
      helperText={options.help_text}
      label={options.label}
      required={options.required}
      error={options.error}
      onChange={onChange}
      disabled={options.disabled || false}
      value={options.value}
    />
  );
}
