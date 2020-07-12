import React from "react";
import { List, ListItemIcon, ListItemText } from "@material-ui/core";
import { ListItemLink } from "src/Components";

// Icons
import DashboardIcon from "@material-ui/icons/Dashboard";

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
    </React.Fragment>
  );
}
