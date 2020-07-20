import React from "react";
import { FabFixed } from "@minigest/ui";
import { isEmpty } from "lodash";
import {
  Box,
  Card as MaterialCard,
  CardHeader as MaterialCardHeader,
  CardContent as MaterialCardContent,
  Grid,
  Divider,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { InputField } from "src/Components";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(3),
  },
  cardHeader: {
    paddingBottom: 0,
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 16,
    },
  },
}));

const Card = (props) => {
  const classes = useStyles();
  return <MaterialCard className={classes.card} {...props} />;
};
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

const anagraficaDesc =
  "Inserisci il nome dell'impresa. " +
  "Se l'impresa è in realtà un libero professionista senza denominazione (ragione sociale), " +
  "utilizza i campi titolo, nome e cognome, altrimenti utilizza solo il campo denominazione!";

export function Form({ options }) {
  const initialValues = {
    titolo: {
      ...options.titolo,
      name: "titolo",
      required: false,
      value: "",
      error: false,
    },
    nome: {
      ...options.nome,
      name: "nome",
      required: true,
      value: "",
      error: true,
    },
    cognome: {
      ...options.cognome,
      name: "cognome",
      required: true,
      value: "",
      error: true,
    },
    denominazione: {
      ...options.denominazione,
      name: "denominazione",
      required: true,
      value: "",
      error: true,
    },
    id_fiscale_iva_paese: {
      ...options.id_fiscale_iva_paese,
      name: "id_fiscale_iva_paese",
      required: true,
      value: "IT",
      error: false,
    },
    id_fiscale_iva_codice: {
      ...options.id_fiscale_iva_codice,
      name: "id_fiscale_iva_codice",
      required: true,
      value: "",
      error: true,
    },
    codice_fiscale: {
      ...options.codice_fiscale,
      name: "codice_fiscale",
      required: true,
      value: "",
      error: true,
    },
  };
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    let { name, value } = e.target;
    let newValues = { ...values };
    let error = newValues[name].error;

    if (newValues[name].max_length) {
      let min = newValues[name].min_length || 0;
      error = value.length < min || value.length > newValues[name].max_length;

      if (isEmpty(value) && !newValues[name].required) {
        error = false;
      }
    }

    // aggiorna val ed error
    newValues = {
      ...newValues,
      [name]: {
        ...newValues[name],
        value: value,
        error: newValues[name].required ? error && true : error,
      },
    };

    // Controlla il form
    let { titolo, nome, cognome, denominazione } = newValues;

    // Controlla nome, cognome, denominazione
    if (!isEmpty(denominazione.value)) {
      newValues = {
        ...newValues,
        denominazione: {
          ...newValues.denominazione,
          error: false,
          disabled: false,
        },
        titolo: {
          ...newValues.titolo,
          error: false,
          disabled: true,
          value: "",
        },
        nome: {
          ...newValues.nome,
          error: false,
          disabled: true,
          required: false,
          value: "",
        },
        cognome: {
          ...newValues.cognome,
          error: false,
          disabled: true,
          required: false,
          value: "",
        },
      };
    } else if (
      !isEmpty(nome.value) ||
      !isEmpty(cognome.value) ||
      !isEmpty(titolo.value)
    ) {
      newValues = {
        ...newValues,
        denominazione: {
          ...newValues.denominazione,
          error: false,
          disabled: true,
          value: "",
          required: false,
        },
        titolo: {
          ...newValues.titolo,
          error: false,
          required: false,
          disabled: false,
        },
        nome: {
          ...newValues.nome,
          error: isEmpty(newValues.nome.value),
          required: true,
          disabled: false,
        },
        cognome: {
          ...newValues.cognome,
          error: isEmpty(newValues.cognome.value),
          required: true,
          disabled: false,
        },
      };
    } else {
      newValues = {
        ...newValues,
        titolo: initialValues.titolo,
        nome: initialValues.nome,
        cognome: initialValues.cognome,
        denominazione: initialValues.denominazione,
      };
    }

    // aggiorna values
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
              <InputField options={values.titolo} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField options={values.nome} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <InputField options={values.cognome} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <Box pt={2} pb={2}>
                <Divider />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <InputField
                options={values.denominazione}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Partita IVA" />
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={12} sm={3}>
              <InputField
                options={values.id_fiscale_iva_paese}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <InputField
                options={values.id_fiscale_iva_codice}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Box pt={3}>
            <Typography variant="body2" gutterBottom>
              <b>Per soggetti fiscali non europei:</b>
            </Typography>

            <Typography variant="body2" gutterBottom>
              Nel campo <u>codice paese partita IVA</u> inserire il codice{" "}
              <em>ISO 3166-1 alpha-2</em> (a due caratteri alfabetici) del
              corrispondente paese dell'Impresa.
            </Typography>
            <Typography variant="body2">
              Nel campo <u>codice partita IVA</u> inserire un valore
              alfanumerico identificativo della controparte (fino ad un massimo
              di 28 caratteri alfanumerici su cui il SdI non effettua controlli
              di validità), oppure inserire i caratteri "99999999999".
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Codice Fiscale" />
        <CardContent>
          <InputField options={values.codice_fiscale} onChange={handleChange} />

          <Box pt={3}>
            <Typography variant="body2" gutterBottom>
              <b>Per soggetti fiscali non italiani:</b>
            </Typography>

            <Typography variant="body2" gutterBottom>
              Compilare col medesimo valore riportato nel campo{" "}
              <u>codice partita IVA</u>.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </form>
  );
}
