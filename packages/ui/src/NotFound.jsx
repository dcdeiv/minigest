import React from "react";
import { Typography } from "@material-ui/core";
import Splash from "./Splash.jsx";
import MessageBox from "./MessageBox.jsx";

export default function NotFound() {
  return (
    <Splash>
      <MessageBox variant="warning">
        <Typography>Ops! Sembra non esserci niente qui!</Typography>
      </MessageBox>
    </Splash>
  );
}
