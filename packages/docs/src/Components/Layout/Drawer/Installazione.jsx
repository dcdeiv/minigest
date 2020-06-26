import React from "react";
import {
  List,
  ListSubheader,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { ListItemLink } from "src/Components";
import WidgetsIcon from "@material-ui/icons/Widgets";
import DiscFullIcon from "@material-ui/icons/DiscFull";

export function Installazione({ handleClose }) {
  return (
    <List
      component="nav"
      aria-labelledby="installazione-lista"
      subheader={
        <ListSubheader component="div" id="installazione-lista">
          Installazione
        </ListSubheader>
      }
    >
      <ListItemLink to="/installazione/pypi" handleClose={handleClose}>
        <ListItemIcon>
          <WidgetsIcon />
        </ListItemIcon>
        <ListItemText>PyPi</ListItemText>
      </ListItemLink>
      <ListItemLink to="/installazione/docker" handleClose={handleClose}>
        <ListItemIcon>
          <DiscFullIcon />
        </ListItemIcon>
        <ListItemText>Docker</ListItemText>
      </ListItemLink>
    </List>
  );
}
