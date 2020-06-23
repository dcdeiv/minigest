import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";

export default function PaperBox({ titolo, ...rest }) {
  let { children } = rest;

  if (!children) {
    return null;
  } else {
    return (
      <Box>
        <Paper>
          <Box p={2}>
            {titolo && <Typography gutterBottom>{titolo}</Typography>}

            {children}
          </Box>
        </Paper>
      </Box>
    );
  }
}
