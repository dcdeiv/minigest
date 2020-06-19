import React from "react";
import PropTypes from "prop-types";
import { FormattedNumber } from "react-intl";

const Percentuale = (props) => {
  const options = {
    value: parseFloat(props.value) / 100,
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return <FormattedNumber {...options} />;
};

Percentuale.propTypes = {
  value: PropTypes.number,
};

export default Percentuale;
