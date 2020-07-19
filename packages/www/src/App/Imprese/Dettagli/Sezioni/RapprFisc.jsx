import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItemText,
  ListItemIcon,
  Box,
  Typography,
} from "@material-ui/core";
import { ListItemLink } from "src/Components";
import { makeStyles } from "@material-ui/core/styles";
import BusinessIcon from "@material-ui/icons/Business";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    paddingBottom: 0,
  },
  cardContent: {
    padding: 0,
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
}));

export function RapprFisc(props) {
  const classes = useStyles();
  let { rappresentante_fiscale_display: rapp } = props;
  let riferimento = rapp.denominazione
    ? rapp.denominazione
    : [rapp.titolo, rapp.nome, rapp.cognome].join(" ");
  const type = {
    impresa: { url: "imprese", icon: <BusinessIcon /> },
    personaFisica: { url: "persone-fisiche", icon: <PeopleIcon /> },
  };

  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        title="Rappresentante Fiscale"
      />
      <CardContent className={classes.cardContent}>
        {!rapp ? (
          <Box p={2}>
            <Typography>non fornito</Typography>
          </Box>
        ) : (
          <List>
            <ListItemLink
              to={`/${type[rapp.resourcetype].url}/dettagli/${rapp.id}`}
            >
              <ListItemIcon>{type[rapp.resourcetype].icon}</ListItemIcon>
              <ListItemText primary={riferimento} />
            </ListItemLink>
          </List>
        )}
      </CardContent>
    </Card>
  );
}
