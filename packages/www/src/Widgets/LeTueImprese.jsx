import React from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LoadingSpinner } from "@minigest/ui";
import { ListItemLink } from "src/Components";
import PageviewIcon from "@material-ui/icons/Pageview";
import BusinessIcon from "@material-ui/icons/Business";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    paddingBottom: 0,
  },
  cardContent: {
    paddingTop: 0,
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
}));

export function LeTueImprese() {
  const classes = useStyles();
  let { dettagli: utente } = useSelector((state) => state.utente.utente);

  return (
    <Card>
      <CardHeader
        title="Le tue imprese"
        className={classes.cardHeader}
        avatar={<BusinessIcon />}
      />
      <CardContent className={classes.cardContent}>
        {utente.getting ? (
          <Box pb={2}>
            <LoadingSpinner />
          </Box>
        ) : utente.getError ? (
          <Box pt={2} pb={2}>
            <Typography>{utente.getError}</Typography>
          </Box>
        ) : isEmpty(utente.imprese) ? (
          <Box pt={2} pb={2}>
            <Typography>Non hai imprese assegnate</Typography>
          </Box>
        ) : (
          <List>
            {utente.imprese.map((o, i) => {
              const url = `/imprese/dettagli/${o.id}`;
              return (
                <ListItemLink key={i} to={url}>
                  <ListItemIcon>
                    <PageviewIcon />
                  </ListItemIcon>
                  <ListItemText>{o.denominazione}</ListItemText>
                </ListItemLink>
              );
            })}
          </List>
        )}
      </CardContent>
    </Card>
  );
}
