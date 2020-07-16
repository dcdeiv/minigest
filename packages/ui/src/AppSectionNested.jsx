import React from "react";
import { Box } from "@material-ui/core";

export default function AppSectionNested(props) {
  let { children, ...rest } = props;

  return (
    <Box mt={4} {...rest}>
      {children}
    </Box>
  );
}
