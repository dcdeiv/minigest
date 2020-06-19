import React from "react";
import { Typography, Box, Container } from "@material-ui/core";

export function NotFound(props) {
  return (
    <React.Fragment>
      <Container maxWidth="sm" style={{ textAlign: "center" }}>
        <Box mt={4}>
          <Typography variant="h3" component="p" gutterBottom>
            Pagina non trovata!
          </Typography>
          <Typography variant="h2" component="span">
            :(
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
