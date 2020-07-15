import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  box: {
    marginBottom: 80,
  },
}));

export default function FabFixedContainer(props) {
  const classes = useStyles();

  return <Box className={classes.box}>{props.children}</Box>;
}
