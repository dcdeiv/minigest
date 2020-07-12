import React from "react";
import { Container, Box, Typography } from "@material-ui/core";

export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography>Ops! Qui sembra non esserci niente!</Typography>
      </Box>
    </Container>
  );
}
