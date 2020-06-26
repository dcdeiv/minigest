import React from "react";
import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Fira Mono', monospace",
    fontSize: 12,
  },
}));

export function CodeBlock(props) {
  const classes = useStyles();

  return (
    <Box mb={1} className={classes.root}>
      <Paper>
        <Box p={1}>{props.children}</Box>
      </Paper>
    </Box>
  );
}
