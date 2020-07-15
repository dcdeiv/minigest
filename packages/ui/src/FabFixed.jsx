import React from "react";
import cslx from "clsx";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    zIndex: 10,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  edit: {
    color: theme.palette.common.black,
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[600],
    },
  },
  remove: {
    color: theme.palette.common.white,
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[600],
    },
  },
}));

export default function FabFixed({ type, onClick, disabled, submit }, ...rest) {
  const classes = useStyles();

  let CurrentIcon = null;
  const currentClass = type && type !== "print" ? classes[type] : null;

  switch (type) {
    case "edit":
      CurrentIcon = <EditIcon {...rest.iconProps} />;
      break;
    case "remove":
      CurrentIcon = <DeleteForeverIcon {...rest.iconProps} />;
      break;
    case "save":
      CurrentIcon = <SaveIcon {...rest.iconProps} />;
      break;
    case "print":
      CurrentIcon = <PrintIcon {...rest.iconProps} />;
      break;
    default:
      CurrentIcon = <AddIcon {...rest.iconProps} />;
  }

  const fabColor =
    type && !["save", "print"].includes(type) ? "default" : "primary";
  const inputType = submit ? "submit" : "button";

  return (
    <Fab
      className={cslx(classes.fab, currentClass)}
      color={fabColor}
      onClick={onClick}
      disabled={disabled}
      type={inputType}
    >
      {CurrentIcon}
    </Fab>
  );
}
