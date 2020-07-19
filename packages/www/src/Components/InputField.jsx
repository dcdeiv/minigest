import React from "react";
import { TextField } from "@material-ui/core";

export default function InputField(props) {
  let { name, options } = props;

  console.log(options);

  if (options.type === "string") {
    return (
      <TextField
        fullWidth
        variant="outlined"
        inputProps={{ name: name }}
        helperText={options.help_text}
        label={options.label}
        required={options.required}
      />
    );
  }
}
