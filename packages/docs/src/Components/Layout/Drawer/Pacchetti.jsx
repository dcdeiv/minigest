import React from "react";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import WidgetsIcon from "@material-ui/icons/Widgets";
import DiscFullIcon from "@material-ui/icons/DiscFull";

export function Pacchetti({ handleClose }) {
  const openLink = (link) => {
    window.open(link, "_blank");
    handleClose();
  };

  return (
    <List
      component="nav"
      aria-labelledby="pacchetti-lista"
      subheader={
        <ListSubheader component="div" id="pacchetti-lista">
          Pacchetti e Sorgente
        </ListSubheader>
      }
    >
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
  );
}
