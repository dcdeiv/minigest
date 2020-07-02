import React from "react";
import {
  List,
  ListSubheader,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { ListItemLink } from "src/Components";

// Icons
import BusinessIcon from "@material-ui/icons/Business";

export function Utilizzo({ handleClose }) {
  return (
    <List
      component="nav"
      aria-labelledby="utilizzo-lista"
      subheader={
        <ListSubheader component="div" id="utilizzo-lista">
          Utilizzo
        </ListSubheader>
      }
    >
      <ListItemLink to="/utilizzo" handleClose={handleClose}>
        <ListItemText>Prima di iniziare</ListItemText>
      </ListItemLink>
      <ListItemLink to="/utilizzo/imprese" handleClose={handleClose}>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText>Imprese</ListItemText>
      </ListItemLink>
    </List>
  );
}
