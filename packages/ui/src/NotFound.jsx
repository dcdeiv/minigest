import React from "react";
import { Paper, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Splash from "./Splash.jsx";

const useStyles = makeStyles((theme) => ({
  innerBox: {
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
  },
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <Splash>
      <Paper>
        <Box className={classes.innerBox}>
          <Typography>Ops! Sembra non esserci niente qui!</Typography>
        </Box>
      </Paper>
    </Splash>
  );
}
