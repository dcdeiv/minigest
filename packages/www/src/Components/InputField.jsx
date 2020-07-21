import React from "react";
import moment from "moment";
import { isEmpty } from "lodash";
import { TextField } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

export default function InputField(props) {
  let { options, onChange } = props;
  const dateHelper =
    options.type === "date"
      ? isEmpty(options.value)
        ? ""
        : moment(options.value).format("YYYY-MM-DD")
      : "";
  const [selectedDate, setDate] = React.useState(dateHelper);
  const handleDateChange = (date) => {
    handleDateChange({ name: options.name, value: date });
    setDate(date);
  };

  if (options.type === "date") {
    return (
      <KeyboardDatePicker
        inputVariant="outlined"
        label={options.label}
        format="YYYY-MM-DD"
        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={(date) => handleDateChange(date)}
      />
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
