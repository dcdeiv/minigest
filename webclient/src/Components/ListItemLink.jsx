import React from "react";
import { ListItem } from "@material-ui/core";
import AdapterLink from "./AdapterLink";

const ListItemLink = (props) => {
  return <ListItem button component={AdapterLink} {...props} />;
};

export default ListItemLink;
