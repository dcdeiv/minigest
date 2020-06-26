import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
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

export function CodeBlock({ mb = 2, caption, children, ...rest }) {
  const classes = useStyles();

  return (
    <Box mb={mb} className={classes.root}>
      {caption && (
        <Box pl={2}>
          <Typography variant="overline">{caption}</Typography>
        </Box>
      )}
      <Paper square>
        <Box p={2} className={classes.content}>
          {children}
        </Box>
      </Paper>
    </Box>
  );
}
