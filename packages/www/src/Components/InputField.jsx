import React from "react";
import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

export default function InputField(props) {
  let { options, onChange } = props;

  if (options.type === "choice") {
    return (
      <FormControl variant="outlined" fullWidth>
        <InputLabel id={`label-${options.name}`}>{options.label}</InputLabel>
        <Select
          labelId={`label-${options.name}`}
          id={options.name}
          value={options.value}
          label={options.label}
          name={options.name}
          onChange={onChange}
        >
          {options.choices.map((o, i) => {
            const value = o.value || "";
            const display = o.display_name || "Non selezionato";
            return (
              <MenuItem key={i} value={value}>
                {display}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  } else {
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
}
