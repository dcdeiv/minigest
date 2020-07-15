import React from "react";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  rootFabFixed: {
    paddingTop: theme.spacing(3),
    marginBottom: 80,
  },
}));

export default function AppContent(props) {
  let { children, container, fabFixed } = props;

  const classes = useStyles();

  const defaultRootClass = fabFixed ? classes.rootFabFixed : classes.root;

  return (
    <Box className={defaultRootClass}>
      <Container {...container}>{children}</Container>
    </Box>
  );
}
