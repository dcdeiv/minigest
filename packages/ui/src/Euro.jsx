import React from "react";
import { FormattedNumber } from "react-intl";

export default function Euro(props) {
  const options = {
    value: props.value,
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return <FormattedNumber {...options} />;
}
