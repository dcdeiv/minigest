import React from "react";
import { Box, Divider } from "@material-ui/core";

export function AppHeader(props) {
  return (
    <Box mb={3}>
      {props.children}
      <Box mt={2}>
        <Divider />
      </Box>
    </Box>
  );
}
