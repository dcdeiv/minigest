import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import queryString from "query-string";
import { filter, isEmpty, forEach } from "lodash";
import { Box, Typography, TextField, Button, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
import { Splash } from "@minigest/ui";
import { action } from "src/state";

const dialogTheme = createMuiTheme({
  palette: {
    background: {
      paper: red[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  box: {
    textAlign: "center",
  },
}));

export default function Accedi(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.utente);
  const classes = useStyles();
  const [formError, setFormError] = React.useState(true);
  const [values, setValues] = React.useState({
    email: {
      required: true,
      id: "email",
      name: "email",
      label: "email",
      type: "email",
      value: "",
      variant: "outlined",
      fullWidth: true,
      margin: "normal",
      error: true,
    },
    password: {
      required: true,
      id: "password",
      name: "password",
      label: "password",
      type: "password",
      value: "",
      variant: "outlined",
      fullWidth: true,
      margin: "normal",
      error: true,
    },
    next: {
      required: false,
      id: "next",
      name: "next",
      type: "hidden",
      value: queryString.parse(history.location.search).next || "/",
      error: false,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: {
        ...values[name],
        value: value,
        error: value === "" || value === null ? true : false,
      },
    });
  };

  React.useEffect(() => {
    const errorFormObj = filter(values, ["error", true]);

    setFormError(!isEmpty(errorFormObj));
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const object = {};

    forEach(values, (o, k) => {
      object[k] = o.value;
    });

    dispatch(action.utente.login(object, history));
  };

  return (
    <Splash container={{ maxWidth: "xs" }}>
      <Paper>
        <Box className={classes.box} p={2}>
          <Typography component="h1" variant="h6" gutterBottom>
            Accedi!
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField {...values.next} onChange={handleChange} />
            <TextField {...values.email} onChange={handleChange} />
            <TextField {...values.password} onChange={handleChange} />

            <Box mt={2}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                disabled={formError}
              >
                accedi
              </Button>
            </Box>
          </form>

          {auth.error && (
            <ThemeProvider theme={dialogTheme}>
              <Box mt={2}>
                <Typography color="error">{auth.message}</Typography>
              </Box>
            </ThemeProvider>
          )}
        </Box>
      </Paper>
    </Splash>
  );
}
