import React from "react";
import { Box } from "@material-ui/core";

export default function AppSectionHeader(props) {
  let { children } = props;

  return <Box mb={2}>{children}</Box>;
}
