import React from "react";
import { FormattedNumber } from "react-intl";

export default function Percentuale(props) {
  const options = {
    value: parseFloat(props.value) / 100,
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return <FormattedNumber {...options} />;
}
