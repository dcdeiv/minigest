import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { action } from "~/store";
import { Layout } from "~/Layout";
import { Lista } from "./Lista";
import { Box } from "@material-ui/core";

export function IvaAliquote(props) {
  const dispatch = useDispatch();
  let { aliquote, aliquoteQ } = useSelector((state) => state.iva);
  const oggi = moment(new Date()).format("YYYY-MM");
  const [periodo, setPeriodo] = React.useState(oggi);

  // Aggiorna la lista delle aliquote IVA
  React.useEffect(() => {
    dispatch(action.ivaAliquote.get());
  }, [dispatch]);

  React.useEffect(() => {
    console.log(periodo);
    dispatch(action.ivaAliquote.getQ(periodo));
  }, [dispatch, periodo]);

  return (
    <Layout title="Aliquote IVA">
      <Box mb={4}>
        <Lista
          subject="Aliquote Correnti"
          search
          searchValue={periodo}
          onSearch={setPeriodo}
          {...aliquoteQ}
        />
      </Box>

      <Box>
        <Lista subject={"Tutte le Aliquote"} {...aliquote} />
      </Box>
    </Layout>
  );
}
