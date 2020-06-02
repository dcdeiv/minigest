import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";

function AppDrawer(props) {
  return (
    <React.Fragment>
      <List>
        <ListItem button to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>minigest</ListItemText>
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default AppDrawer;
