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
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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

export function Form({ options }) {
  const [stabileOrgDisabled, toggleStabileOrg] = React.useState(true);
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
    sede_indirizzo: {
      ...options.sede.children.indirizzo,
      name: "sede_indirizzo",
      required: true,
      value: "",
      error: true,
    },
    sede_numero_civico: {
      ...options.sede.children.numero_civico,
      name: "sede_numero_civico",
      required: false,
      value: "",
      error: false,
    },
    sede_cap: {
      ...options.sede.children.cap,
      name: "sede_cap",
      required: true,
      value: "",
      error: true,
    },
    sede_comune: {
      ...options.sede.children.comune,
      name: "sede_comune",
      required: true,
      value: "",
      error: true,
    },
    sede_provincia: {
      ...options.sede.children.provincia,
      name: "sede_provincia",
      required: false,
      value: "",
      error: false,
    },
    sede_nazione: {
      ...options.sede.children.nazione,
      name: "sede_nazione",
      required: true,
      value: "",
      error: true,
    },
    stabile_organizzazione_indirizzo: {
      ...options.stabile_organizzazione.children.indirizzo,
      name: "stabile_organizzazione_indirizzo",
      required: stabileOrgDisabled ? false : true,
      value: "",
      error: false,
      disabled: stabileOrgDisabled,
    },
    stabile_organizzazione_numero_civico: {
      ...options.stabile_organizzazione.children.numero_civico,
      name: "stabile_organizzazione_numero_civico",
      required: false,
      value: "",
      error: false,
      disabled: stabileOrgDisabled,
    },
    stabile_organizzazione_cap: {
      ...options.stabile_organizzazione.children.cap,
      name: "stabile_organizzazione_cap",
      required: stabileOrgDisabled ? false : true,
      value: "",
      error: false,
      disabled: stabileOrgDisabled,
    },
    stabile_organizzazione_comune: {
      ...options.stabile_organizzazione.children.comune,
      name: "stabile_organizzazione_comune",
      required: stabileOrgDisabled ? false : true,
      value: "",
      error: false,
      disabled: stabileOrgDisabled,
    },
    stabile_organizzazione_provincia: {
      ...options.stabile_organizzazione.children.provincia,
      name: "stabile_organizzazione_provincia",
      required: false,
      value: "",
      error: false,
      disabled: stabileOrgDisabled,
    },
    stabile_organizzazione_nazione: {
      ...options.stabile_organizzazione.children.nazione,
      name: "stabile_organizzazione_nazione",
      required: stabileOrgDisabled ? false : true,
      value: "",
      error: false,
      disabled: stabileOrgDisabled,
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

  const handleToggleStabileOrg = () => {
    const isDisabled = !stabileOrgDisabled;
    toggleStabileOrg(isDisabled);

    let newValues = { ...values };
    newValues = {
      ...newValues,
      stabile_organizzazione_indirizzo: {
        ...newValues.stabile_organizzazione_indirizzo,
        required: isDisabled ? false : true,
        error: isDisabled ? false : true,
        disabled: isDisabled,
        value: isDisabled
          ? ""
          : newValues.stabile_organizzazione_indirizzo.value,
      },
      stabile_organizzazione_numero_civico: {
        ...newValues.stabile_organizzazione_numero_civico,
        disabled: isDisabled,
        value: isDisabled
          ? ""
          : newValues.stabile_organizzazione_numero_civico.value,
      },
      stabile_organizzazione_cap: {
        ...newValues.stabile_organizzazione_cap,
        required: isDisabled ? false : true,
        error: isDisabled ? false : true,
        disabled: isDisabled,
        value: isDisabled ? "" : newValues.stabile_organizzazione_cap.value,
      },
      stabile_organizzazione_comune: {
        ...newValues.stabile_organizzazione_comune,
        required: isDisabled ? false : true,
        error: isDisabled ? false : true,
        disabled: isDisabled,
        value: isDisabled ? "" : newValues.stabile_organizzazione_comune.value,
      },
      stabile_organizzazione_provincia: {
        ...newValues.stabile_organizzazione_provincia,
        disabled: isDisabled,
        value: isDisabled
          ? ""
          : newValues.stabile_organizzazione_provincia.value,
      },
      stabile_organizzazione_nazione: {
        ...newValues.stabile_organizzazione_nazione,
        required: isDisabled ? false : true,
        error: isDisabled ? false : true,
        disabled: isDisabled,
        value: isDisabled ? "" : newValues.stabile_organizzazione_nazione.value,
      },
    };

    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <FabFixed type="save" submit onClick={handleSubmit} />

      <Card>
        <CardHeader title="Anagrafica" />
        <CardContent>
          <Box mb={2}>
            <Typography variant="body2">
              Inserisci il nome dell'impresa. Se l'impresa è in realtà un libero
              professionista senza denominazione (ragione sociale), utilizza i
              campi titolo, nome e cognome, altrimenti utilizza solo il campo
              denominazione!
            </Typography>
          </Box>

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

      <Card>
        <CardHeader title="Sede" />
        <CardContent>
          <Box mb={2}>
            <Typography variant="body2">
              Inserire la sede legale dell'azienda. Se l'azienda è estera, e
              anche se questa dovesse avere una{" "}
              <em>stabile organizzazione in Italia</em>, inserire comunque
              l'indirizzo estero!
            </Typography>
          </Box>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={12} sm={9}>
              <InputField
                options={values.sede_indirizzo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField
                options={values.sede_numero_civico}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                options={values.sede_comune}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField options={values.sede_cap} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField
                options={values.sede_provincia}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField
                options={values.sede_nazione}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardHeader
          title="Sede Stabile Organizzazione"
          action={
            <Switch
              checked={!stabileOrgDisabled}
              onClick={handleToggleStabileOrg}
            />
          }
        />
        <CardContent>
          <Box mb={2}>
            <Typography variant="body2">
              Inserire l'indirizzo italiano della stabile organizzazione
              dell'impresa estera
            </Typography>
          </Box>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={12} sm={9}>
              <InputField
                options={values.stabile_organizzazione_indirizzo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputField
                options={values.stabile_organizzazione_numero_civico}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                options={values.stabile_organizzazione_comune}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField
                options={values.stabile_organizzazione_cap}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField
                options={values.stabile_organizzazione_provincia}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputField
                options={values.stabile_organizzazione_nazione}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
}
