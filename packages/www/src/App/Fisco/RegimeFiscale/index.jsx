import React from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { LoadingSpinner, MessageBox, ListaVuota } from "@minigest/ui";

export function RegimeFiscale() {
  let { regimeFiscale } = useSelector((state) => state.fisco);

  if (regimeFiscale.getting) {
    return <LoadingSpinner />;
  } else {
    if (regimeFiscale.getError) {
      return <MessageBox>{regimeFiscale.getError}</MessageBox>;
    } else {
      if (isEmpty(regimeFiscale.results)) {
        return <ListaVuota />;
      } else {
        return <Typography>eccoci!</Typography>;
      }
    }
  }
}
