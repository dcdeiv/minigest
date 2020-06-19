import React from "react";
import { List, ListItem, ListItemText, Collapse } from "@material-ui/core";
import { ListItemLink } from "~/Components";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

export default function DrawerTributi(props) {
  const { handleClose } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Tributi" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <span onClick={handleClose}>
          <List component="div" disablePadding>
            <ListItemLink to="/tributi/iva/aliquote">
              <ListItemText primary="Iva Aliquote" />
            </ListItemLink>
          </List>
        </span>
      </Collapse>
    </List>
  );
}
