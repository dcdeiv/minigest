import React from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { LoadingSpinner, MessageBox, ListaVuota } from "@minigest/ui";
import { action } from "src/state";
import { Content } from "./Content";

export function RegimeFiscale() {
  const dispatch = useDispatch();
  let { regimeFiscale } = useSelector((state) => state.fisco);

  // Aggiorna la lista degli interessi legali
  React.useEffect(() => {
    dispatch(action.regimeFiscale.get());
  }, [dispatch]);

  if (regimeFiscale.getting) {
    return <LoadingSpinner />;
  } else {
    if (regimeFiscale.getError) {
      return <MessageBox>{regimeFiscale.getError}</MessageBox>;
    } else {
      if (isEmpty(regimeFiscale.results)) {
        return <ListaVuota />;
      } else {
        return <Content data={regimeFiscale.results} />;
      }
    }
  }
}
