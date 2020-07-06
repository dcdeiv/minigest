import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  LoadingSpinner,
  ErrorBox,
  PaperBox,
  FabFixedContainer,
  FabFixed,
} from "src/Components";
import { action } from "src/store";
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

// Componenti
import {
  Albo,
  DettagliFiscali,
  Contatti,
  Indirizzo,
  RecapitiFiscali,
  Rappresentante,
} from "./Partials";
import { TableCellHead } from "./Partials/Components";

export default function Dettagli(props) {
  const dispatch = useDispatch();
  let { id } = useParams();
  let { dettagli } = useSelector((state) => state.imprese);

  React.useEffect(() => {
    dispatch(action.imprese.get(id));
  }, [dispatch, id]);

  if (dettagli.getting) {
    return <LoadingSpinner />;
  } else {
    if (dettagli.getError) {
      return <ErrorBox>{dettagli.getError}</ErrorBox>;
    } else {
      let { data: impresa } = dettagli;
      let { capitale_sociale, socio_unico, stato_liquidazione } = impresa;

      return (
        <FabFixedContainer>
          <FabFixed type="edit" />

          <Container maxWidth="md">
            <PaperBox>
              <Box mb={5}>
                <Typography variant="h4" gutterBottom>
                  {impresa.denominazione}
                </Typography>

                <Table>
                  <TableBody>
                    <Indirizzo {...impresa} />
                    <Indirizzo variant="stabile_organizzazione" {...impresa} />
                    {capitale_sociale && (
                      <TableRow>
                        <TableCellHead>Capitale Sociale</TableCellHead>
                        <TableCell>{capitale_sociale}</TableCell>
                      </TableRow>
                    )}
                    {socio_unico && (
                      <TableRow>
                        <TableCellHead>Persone</TableCellHead>
                        <TableCell>
                          {socio_unico === "SU" ? "socio unico" : "più soci"}
                        </TableCell>
                      </TableRow>
                    )}
                    {stato_liquidazione && (
                      <TableRow>
                        <TableCellHead>In Liquidazione</TableCellHead>
                        <TableCell>
                          {stato_liquidazione === "LS" ? "sì" : "no"}
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </Box>

              <Contatti {...impresa} />

              <DettagliFiscali {...impresa} />

              <RecapitiFiscali {...impresa} />

              <Albo {...impresa} />
            </PaperBox>

            <Rappresentante {...impresa} />
          </Container>
        </FabFixedContainer>
      );
    }
  }
}
