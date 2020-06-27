import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    textAlign: "center",
  },
}));

export function LoadingSpinner(props) {
  const classes = useStyles();

  return (
    <Box p={2} pt={4} className={classes.box}>
      <CircularProgress />
    </Box>
  );
}
