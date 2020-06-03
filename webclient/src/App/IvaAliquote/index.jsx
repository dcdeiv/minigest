import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "~/store";
import { Layout } from "~/Layout";
import { Lista } from "./Lista";
import { Box } from "@material-ui/core";

export function IvaAliquote(props) {
  const dispatch = useDispatch();
  let { aliquote, aliquoteQ } = useSelector((state) => state.iva);

  // Aggiorna la lista delle aliquote IVA
  React.useEffect(() => {
    dispatch(action.ivaAliquote.get());
    dispatch(action.ivaAliquote.getQ());
  }, [dispatch]);

  return (
    <Layout title="Aliquote IVA">
      <Box mb={4}>
        <Lista subject="Aliquote Correnti" {...aliquoteQ} />
      </Box>

      <Box>
        <Lista subject={"Tutte le Aliquote"} {...aliquote} />
      </Box>
    </Layout>
  );
}
