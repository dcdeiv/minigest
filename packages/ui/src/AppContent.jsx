import React from "react";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  content: {},
}));

export default function AppContent(props) {
  let { children, container } = props;

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container {...container}>{children}</Container>
    </Box>
  );
}
