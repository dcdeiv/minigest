import React from "react";
import { Box } from "@material-ui/core";

export default function AppSection(props) {
  let { children, ...rest } = props;

  return (
    <Box mb={4} {...rest}>
      {children}
    </Box>
  );
}
