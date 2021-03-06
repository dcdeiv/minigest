import React from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { LoadingSpinner, MessageBox, ListaVuota } from "@minigest/ui";
import { action } from "src/state";
import { Content } from "./Content";

export function Tur() {
  const dispatch = useDispatch();
  let { tur } = useSelector((state) => state.fisco);

  // Aggiorna la lista degli interessi legali
  React.useEffect(() => {
    dispatch(action.tur.get());
  }, [dispatch]);

  if (tur.getting) {
    return <LoadingSpinner />;
  } else {
    if (tur.getError) {
      return <MessageBox>{tur.getError}</MessageBox>;
    } else {
      if (isEmpty(tur.results)) {
        return <ListaVuota />;
      } else {
        return <Content data={tur.results} />;
      }
    }
  }
}
