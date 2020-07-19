import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AppHeader,
  AppContent,
  FabFixed,
  LoadingSpinner,
  MessageBox,
} from "@minigest/ui";
import {
  Typography,
  Box,
  Card,
  CardHeader as MaterialCardHeader,
  CardContent as MaterialCardContent,
  Grid,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { InputField } from "src/Components";
import { action } from "src/state";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    paddingBottom: 0,
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 16,
    },
  },
}));

const CardHeader = (props) => {
  const classes = useStyles();
  return <MaterialCardHeader className={classes.cardHeader} {...props} />;
};
const CardContent = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <MaterialCardContent className={classes.cardContent} {...rest}>
      {children}
    </MaterialCardContent>
  );
};

export function Aggiungi() {
  const dispatch = useDispatch();
  let { options: opts } = useSelector((state) => state.imprese);

  // Scarica le opzioni del form
  React.useEffect(() => {
    dispatch(action.imprese.getOptions());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
      let { options } = opts;

      const anagraficaDesc =
        "Inserisci il nome dell'impresa. " +
        "Se l'impresa è in realtà un libero professionista senza denominazione (ragione sociale), " +
        "utilizza i campi titolo, nome, cognome, altrimenti utilizza solo il campo denominazione!";

      return (
        <React.Fragment>
          <AppHeader>
            <Typography variant="overline">aggiungi</Typography>
            <Typography variant="h3" component="h1">
              Impresa
            </Typography>
          </AppHeader>
          <AppContent fabFixed>
            <form noValidate onSubmit={handleSubmit}>
              <FabFixed type="save" submit onClick={handleSubmit} />

              <Card>
                <CardHeader title="Anagrafica" subheader={anagraficaDesc} />
                <CardContent>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={3}>
                      <InputField name="titolo" options={options.titolo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <InputField name="nome" options={options.nome} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <InputField name="cognome" options={options.cognome} />
                    </Grid>
                    <Grid item xs={12}>
                      <Box pt={2} pb={2}>
                        <Divider />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        name="denominazione"
                        options={options.denominazione}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </form>
          </AppContent>
        </React.Fragment>
      );
    }
  }
}
