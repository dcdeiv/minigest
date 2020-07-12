import React from "react";
import { ListItem } from "@material-ui/core";
import Link from "./Link.jsx";

export default function ListItemLink(props) {
  const { handleClose, ...rest } = props;

  return (
    <span onClick={handleClose}>
      <ListItem button component={Link} {...rest} />
    </span>
  );
}
