import React from "react";
import { Typography } from "@material-ui/core";
import { AppHeader } from "src/Components";

export function PyPi(props) {
  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="overline">Installazione</Typography>
        <Typography variant="h3">PyPi</Typography>
      </AppHeader>
    </React.Fragment>
  );
}
