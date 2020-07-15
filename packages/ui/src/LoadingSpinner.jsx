import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
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
