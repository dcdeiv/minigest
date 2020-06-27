import React from "react";
import { List, ListSubheader, ListItemText } from "@material-ui/core";
import { ListItemLink } from "src/Components";

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
    </List>
  );
}
