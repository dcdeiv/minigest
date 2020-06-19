import React from "react";
import { List, ListItem, ListItemText, Collapse } from "@material-ui/core";
import { ListItemLink } from "~/Components";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

export default function (props) {
  const { handleClose } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Fisco" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <span onClick={handleClose}>
          <List component="div" disablePadding>
            <ListItemLink to="/fisco/interessi-legali">
              <ListItemText primary="Interessi Legali" />
            </ListItemLink>

            <ListItemLink to="/fisco/regime-fiscale">
              <ListItemText primary="Regime Fiscale" />
            </ListItemLink>

            <ListItemLink to="/fisco/tasso-ufficiale-riferimento">
              <ListItemText primary="T.U.R." />
            </ListItemLink>
          </List>
        </span>
      </Collapse>
    </List>
  );
}
