import React from "react";
import { Container, Box } from "@material-ui/core";
import { ListaVuota } from "~/Components";

export function NotFound(props) {
  return (
    <Container>
      <Box mt={4}>
        <ListaVuota message="Pagina non trovata!" />
      </Box>
    </Container>
  );
}
