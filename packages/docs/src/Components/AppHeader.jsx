import React from "react";
import { Box, Divider } from "@material-ui/core";

export function AppHeader({ children, mb = 6, noDivider, ...rest }) {
  return (
    <Box mb={mb} {...rest}>
      {children}

      {!noDivider && (
        <Box mt={2}>
          <Divider />
        </Box>
      )}
    </Box>
  );
}
