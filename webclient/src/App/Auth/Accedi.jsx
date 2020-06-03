import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    textAlign: "center",
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box className={classes.box} p={2}>
        <Typography component="h1" variant="h6" gutterBottom>
          Accedi!
        </Typography>
      </Box>
    </Container>
  );
}
