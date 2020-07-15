import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  box: {
    textAlign: "center",
  },
}));

export default function LoadingSpinner() {
  const classes = useStyles();

  return (
    <Box p={2} pt={4} className={classes.box}>
      <CircularProgress />
    </Box>
  );
}
