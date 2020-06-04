import React from "react";
import { List, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { ListItemLink } from "~/Components";

// Drawer Components
import DrawerTributi from "./Tributi";

function AppDrawer(props) {
  return (
    <React.Fragment>
      <List>
        <ListItemLink to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>minigest</ListItemText>
        </ListItemLink>
        <DrawerTributi />
      </List>
    </React.Fragment>
  );
}

export default AppDrawer;