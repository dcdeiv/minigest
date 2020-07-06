import React from "react";
import { isEmpty } from "lodash";
import { Typography } from "@material-ui/core";
import { PaperBox } from "src/Components";

export function Rappresentante(props) {
  let { rappresentante_fiscale } = props;

  console.log(rappresentante_fiscale);

  if (isEmpty(rappresentante_fiscale)) {
    return null;
  } else {
    return (
      <PaperBox>
        <Typography variant="h6" gutterBottom>
          Rappresentante Fiscale
        </Typography>

        <p>dettagli rappresentante fiscale</p>
      </PaperBox>
    );
  }
}
