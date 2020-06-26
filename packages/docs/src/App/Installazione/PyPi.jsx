import React from "react";
import { Typography } from "@material-ui/core";
import { AppHeader, CodeBlock } from "src/Components";

export function PyPi(props) {
  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="overline">Installazione</Typography>
        <Typography variant="h3">PyPi</Typography>
      </AppHeader>

      <CodeBlock>pip install minigest</CodeBlock>
    </React.Fragment>
  );
}
