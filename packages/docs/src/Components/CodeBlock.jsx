import React from "react";
import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Fira Mono', monospace",
  },
  content: {
    borderLeftStyle: "solid",
    borderLeftWeight: theme.spacing(1),
    borderLeftColor: theme.palette.secondary.main,
  },
}));

export function CodeBlock(props) {
  const classes = useStyles();

  return (
    <Box mb={1} className={classes.root}>
      <Paper square>
        <Box p={2} className={classes.content}>
          {props.children}
        </Box>
      </Paper>
    </Box>
  );
}
