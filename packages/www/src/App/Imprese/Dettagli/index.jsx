import React from "react";
import { isEmpty } from "lodash";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import {
  AppHeader,
  AppContent,
  MessageBox,
  LoadingSpinner,
} from "@minigest/ui";
import { action } from "src/state";

export function Dettagli() {
  const dispatch = useDispatch();
  let { id } = useParams();
  let { dettagli: impresa } = useSelector((state) => state.imprese);

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
    if (impresa.getting) {
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
                {imp.denominazione}
              </Typography>
            </AppHeader>
            <AppContent>
              <Typography>ciao</Typography>
            </AppContent>
          </React.Fragment>
        );
      }
    }
  }
}
