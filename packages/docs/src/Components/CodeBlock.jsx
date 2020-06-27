import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Fira Mono', monospace",
  },
  content: {
    borderLeftStyle: "solid",
    borderLeftWidth: 3,
    borderLeftColor: theme.palette.secondary.main,
    overflowX: "auto",
  },
  typography: {
    whiteSpace: "pre-wrap",
    fontFamily: "inherit",
    fontSize: 14,
  },
}));

export function CodeBlock({ mt = 4, mb = 4, caption, children, ...rest }) {
  const classes = useStyles();

  return (
    <Box mt={mt} mb={mb} className={classes.root} {...rest}>
      {caption && (
        <Box pl={2}>
          <Typography variant="overline">{caption}</Typography>
        </Box>
      )}
      <Paper square>
        <Box p={2} className={classes.content}>
          <Typography className={classes.typography}>{children}</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
