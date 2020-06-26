import React from "react";
import { Box } from "@material-ui/core";

export function Section({ children, mb = 4, ...rest }) {
  return (
    <Box mb={4} {...rest}>
      {children}
    </Box>
  );
}

export function HeaderSection({ children, mb = 2, ...rest }) {
  return (
    <Box mb={mb} {...rest}>
      {children}
    </Box>
  );
}
