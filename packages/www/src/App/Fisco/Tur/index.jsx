import React from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { LoadingSpinner, MessageBox, ListaVuota } from "@minigest/ui";

export function Tur() {
  let { tur } = useSelector((state) => state.fisco);

  if (tur.getting) {
    return <LoadingSpinner />;
  } else {
    if (tur.getError) {
      return <MessageBox>{tur.getError}</MessageBox>;
    } else {
      if (isEmpty(tur.results)) {
        return <ListaVuota />;
      } else {
        return <Typography>eccoci!</Typography>;
      }
    }
  }
}
