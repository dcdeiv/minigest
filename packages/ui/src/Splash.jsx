import React from "react";
import { isEmpty } from "lodash";
import { Container, Box } from "@material-ui/core";

export default function Splash(props) {
  const { container = {}, children } = props;
  const containerProps = isEmpty(container) ? { maxWidth: "sm" } : container;

  return (
    <Container {...containerProps} style={{ height: "100vh" }}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
