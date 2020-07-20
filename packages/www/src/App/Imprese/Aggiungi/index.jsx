import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AppHeader,
  AppContent,
  LoadingSpinner,
  MessageBox,
} from "@minigest/ui";
import { Typography, Box } from "@material-ui/core";
import { action } from "src/state";
import { Form } from "./Form";

export function Aggiungi() {
  const dispatch = useDispatch();
  let { options: opts } = useSelector((state) => state.imprese);

  // Scarica le opzioni del form
  React.useEffect(() => {
    dispatch(action.imprese.getOptions());
  }, [dispatch]);

  if (opts.getting) {
    return <LoadingSpinner />;
  } else {
    if (opts.getError) {
      return (
        <Box mt={2}>
          <MessageBox>{opts.getError}</MessageBox>
        </Box>
      );
    } else {
      return (
        <React.Fragment>
          <AppHeader>
            <Typography variant="overline">aggiungi</Typography>
            <Typography variant="h3" component="h1">
              Impresa
            </Typography>
          </AppHeader>
          <AppContent fabFixed>
            <Form options={opts.options} />
          </AppContent>
        </React.Fragment>
      );
    }
  }
}
