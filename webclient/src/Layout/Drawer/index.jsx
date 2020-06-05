import React from "react";
import { List, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { ListItemLink } from "~/Components";

// Drawer Components
import DrawerTributi from "./Tributi";

function AppDrawer(props) {
  const { handleClose } = props;
  return (
    <React.Fragment>
      <List>
        <ListItemLink to="/" handleClose={handleClose}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>minigest</ListItemText>
        </ListItemLink>
      </List>
      <Divider />
      <DrawerTributi handleClose={handleClose} />
      <Divider />
    </React.Fragment>
  );
}

export default AppDrawer;
