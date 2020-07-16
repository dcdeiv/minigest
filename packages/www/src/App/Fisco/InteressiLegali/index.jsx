import React from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { LoadingSpinner, MessageBox, ListaVuota } from "@minigest/ui";
import { action } from "src/state";
import { Content } from "./Content";

export function InteressiLegali() {
  const dispatch = useDispatch();
  let { interessiLegali } = useSelector((state) => state.fisco);

  // Aggiorna la lista degli interessi legali
  React.useEffect(() => {
    dispatch(action.interessiLegali.get());
  }, [dispatch]);

  if (interessiLegali.getting) {
    return <LoadingSpinner />;
  } else {
    if (interessiLegali.getError) {
      return <MessageBox>{interessiLegali.getError}</MessageBox>;
    } else {
      if (isEmpty(interessiLegali.results)) {
        return <ListaVuota />;
      } else {
        return <Content data={interessiLegali.results} />;
      }
    }
  }
}
