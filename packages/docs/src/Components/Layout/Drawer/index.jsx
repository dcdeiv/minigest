import React from "react";
import { List, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import { ListItemLink } from "src/Components";
import HomeIcon from "@material-ui/icons/Home";

// Drawer Components
import { Pacchetti } from "./Pacchetti";
import { Installazione } from "./Installazione";
import { Utilizzo } from "./Utilizzo";

function AppDrawer(props) {
  const { handleClose } = props;

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
      <Utilizzo handleClose={handleClose} />
    </React.Fragment>
  );
}

export default AppDrawer;
