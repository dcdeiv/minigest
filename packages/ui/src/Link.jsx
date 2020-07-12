import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as MaterialLink } from "@materia-ui/core";

export default function Link(props) {
  let { children, ...rest } = props;

  return (
    <MaterialLink component={RouterLink} {...rest}>
      {children}
    </MaterialLink>
  );
}
