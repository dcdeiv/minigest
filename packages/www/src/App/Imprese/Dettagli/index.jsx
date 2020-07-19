import React from "react";
import { isEmpty, filter } from "lodash";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Chip, Grid } from "@material-ui/core";
import {
  AppHeader,
  AppContent,
  MessageBox,
  LoadingSpinner,
} from "@minigest/ui";
import { action } from "src/state";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

// Sezioni
import {
  IdFiscali,
  Contatti,
  Sdi,
  Indirizzo,
  Albo,
  Societa,
  RapprFisc,
  Altro,
} from "./Sezioni";

export function Dettagli() {
  const dispatch = useDispatch();
  let { id } = useParams();
  let { dettagli: impresa } = useSelector((state) => state.imprese);
  let { imprese: userImprese } = useSelector(
    (state) => state.utente.utente.dettagli
  );
  let { options } = useSelector((state) => state.imprese);
  let isStaff = isEmpty(userImprese)
    ? false
    : filter(userImprese, (i) => i.id === parseInt(id));

  // Scarica i dati dell'impresa
  React.useEffect(() => {
    dispatch(action.imprese.get(id));
  }, [id, dispatch]);

  if (!id) {
    return (
      <Box mt={4}>
        <MessageBox>Qui non c'è niente!</MessageBox>
      </Box>
    );
  } else {
    if (options.getting && impresa.getting) {
      return <LoadingSpinner />;
    } else {
      if (isEmpty(impresa.dettagli)) {
        return (
          <Box mt={4}>
            <MessageBox>Qui non c'è niente!</MessageBox>
          </Box>
        );
      } else {
        let imp = impresa.dettagli;

        return (
          <React.Fragment>
            <AppHeader>
              <Typography variant="h3" component="h1">
                {imp.denominazione
                  ? imp.denominazione
                  : [imp.titolo, imp.nome, imp.cognome].join(" ")}
              </Typography>

              {isStaff && (
                <Box mt={4}>
                  <Chip
                    label="Staff"
                    color="secondary"
                    icon={<CheckCircleIcon />}
                  />
                </Box>
              )}
            </AppHeader>
            <AppContent>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item xs={12}>
                  <IdFiscali {...imp} />
                </Grid>

                <Grid item xs={12}>
                  <Indirizzo indirizzo={imp.sede} />
                </Grid>

                <Grid item xs={12}>
                  <Indirizzo
                    indirizzo={imp.stabile_organizzazione}
                    titolo="Stabile Organizzazione"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Sdi {...imp} />
                </Grid>

                <Grid item xs={12}>
                  <Contatti {...imp} />
                </Grid>

                <Grid item xs={12}>
                  <Albo {...imp} />
                </Grid>

                <Grid item xs={12}>
                  <Societa {...imp} options={options.options} />
                </Grid>

                <Grid item xs={12}>
                  <RapprFisc {...imp} />
                </Grid>

                <Grid item xs={12}>
                  <Altro {...imp} />
                </Grid>
              </Grid>
            </AppContent>
          </React.Fragment>
        );
      }
    }
  }
}
