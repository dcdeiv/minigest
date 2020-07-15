import React from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { LoadingSpinner, MessageBox, ListaVuota } from "@minigest/ui";

export function InteressiLegali() {
  let { interessiLegali } = useSelector((state) => state.fisco);

  if (interessiLegali.getting) {
    return <LoadingSpinner />;
  } else {
    if (interessiLegali.getError) {
      return <MessageBox>{interessiLegali.getError}</MessageBox>;
    } else {
      if (isEmpty(interessiLegali.results)) {
        return <ListaVuota />;
      } else {
        return <Typography>eccoci!</Typography>;
      }
    }
  }
}
