import React from "react";
import { Divider, List, ListItemIcon, ListItemText } from "@material-ui/core";
import { ListItemLink } from "src/Components";

// Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import FaceIcon from "@material-ui/icons/Face";

// Sezioni
import Fisco from "./Fisco";
import Tributi from "./Tributi";

export default function AppDrawer(props) {
  let { handleClose = () => true } = props;

  return (
    <React.Fragment>
      <List>
        <ListItemLink to="/" handleClose={handleClose}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemLink>
      </List>
      <Divider />
      <List>
        <ListItemLink to="/profilo" handleClose={handleClose}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Profilo" />
        </ListItemLink>
      </List>
      <Divider />
      <Fisco handleClose={handleClose} />
      <Divider />
      <Tributi handleClose={handleClose} />
      <Divider />
    </React.Fragment>
  );
}
