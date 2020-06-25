import React from "react";
import { Container, Box, Typography } from "@material-ui/core";

export function App(props) {
  return (
    <Box mt={4}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h3" gutterBottom>
          minigest
        </Typography>
        <Typography>in costruzione...</Typography>
      </Container>
    </Box>
  );
}
