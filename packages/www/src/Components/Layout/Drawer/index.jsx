import React from "react";
import { List, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import { ListItemLink } from "~/Components";

// Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import BusinessIcon from "@material-ui/icons/Business";

// Drawer Components
import DrawerTributi from "./Tributi";
import DrawerFisco from "./Fisco";

function AppDrawer(props) {
  const { handleClose } = props;

  return (
    <React.Fragment>
      <List>
        <ListItemLink to="/" handleClose={handleClose}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItemLink>

        <ListItemLink to="/imprese" handleClose={handleClose}>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText>Imprese</ListItemText>
        </ListItemLink>
      </List>
      <Divider />
      <DrawerTributi handleClose={handleClose} />
      <Divider />
      <DrawerFisco handleClose={handleClose} />
      <Divider />
    </React.Fragment>
  );
}

export default AppDrawer;
