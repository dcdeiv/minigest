import React from "react";
import { Divider, List, ListItemIcon, ListItemText } from "@material-ui/core";
import { ListItemLink } from "src/Components";
import HomeIcon from "@material-ui/icons/Home";

// Drawer Components
import { Pacchetti } from "./Pacchetti";
import { Installazione } from "./Installazione";

export default function AppDrawer(props) {
  let { handleClose = () => true } = props;

  return (
    <React.Fragment>
      <List>
        <ListItemLink to="/" handleClose={handleClose}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItemLink>
      </List>
      <Divider />
      <Pacchetti handleClose={handleClose} />
      <Divider />
      <Installazione handleClose={handleClose} />
      <Divider />
    </React.Fragment>
  );
}
