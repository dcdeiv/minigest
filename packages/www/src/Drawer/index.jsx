import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

export function AppDrawer(props) {
  return (
    <React.Fragment>
      <List>
        <ListItem>
          <ListItemText primary="prova" />
        </ListItem>
      </List>
    </React.Fragment>
  );
}
