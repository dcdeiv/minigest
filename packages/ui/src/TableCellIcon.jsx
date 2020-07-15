import React from "react";
import { TableCell } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  tableCellIcon: {
    width: 48,
    textAlign: "center",
    paddingLeft: 4,
    paddingRight: 4,
  },
}));

export default function TableCellIcon({ children, ...rest }) {
  const classes = useStyles();

  return (
    <TableCell className={classes.tableCellIcon} {...rest}>
      {children}
    </TableCell>
  );
}
