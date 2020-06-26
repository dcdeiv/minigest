import React from "react";
import { Box, Divider } from "@material-ui/core";

export function AppHeader({ children, mb = 6, ...rest }) {
  return (
    <Box mb={mb} {...rest}>
      {children}
      <Box mt={2}>
        <Divider />
      </Box>
    </Box>
  );
}
