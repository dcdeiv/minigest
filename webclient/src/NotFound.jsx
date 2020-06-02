import React from "react";
import { Typography, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    textAlign: "center",
  },
}));

function NotFound(props) {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.box} p={2}>
        <Typography variant="h1" component="h2">
          minigest
        </Typography>
        <Typography variant="h2" component="h3">
          pagina non trovata!
        </Typography>
      </Box>
    </Container>
  );
}

export default NotFound;
