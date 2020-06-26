import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { ListItemLink } from "src/Components";

// Icons
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import WidgetsIcon from "@material-ui/icons/Widgets";
import DiscFullIcon from "@material-ui/icons/DiscFull";

function AppDrawer(props) {
  const { handleClose } = props;

  const openLink = (link) => {
    window.open(link, "_blank");
    handleClose();
  };

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
      <List>
        <ListItem
          button
          onClick={() => openLink("https://github.com/dcdeiv/minigest")}
        >
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText>Github</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => openLink("https://pypi.org/project/minigest/")}
        >
          <ListItemIcon>
            <WidgetsIcon />
          </ListItemIcon>
          <ListItemText>PyPi Package</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => openLink("https://hub.docker.com/r/dcdeiv/minigest")}
        >
          <ListItemIcon>
            <DiscFullIcon />
          </ListItemIcon>
          <ListItemText>Docker Image</ListItemText>
        </ListItem>
      </List>
      <Divider />
    </React.Fragment>
  );
}

export default AppDrawer;
