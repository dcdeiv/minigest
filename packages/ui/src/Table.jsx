import React from "react";
import { Box, Table as MaterialTable } from "@material-ui/core";

export default function Table(props) {
  let { box, table, children } = props;
  return (
    <Box style={{ overflowX: "auto" }} {...box}>
      <MaterialTable {...table}>{children}</MaterialTable>
    </Box>
  );
}
