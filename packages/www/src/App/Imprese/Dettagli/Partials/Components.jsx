import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, TableCell } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tableCell: {
    width: "150px",
    textTransform: "capitalize",
  },
}));

export function TableCellHead(props) {
  const classes = useStyles();
  let { children } = props;

  if (!children) {
    return null;
  } else {
    return (
      <TableCell variant="head" className={classes.tableCell}>
        {children}
      </TableCell>
    );
  }
}

export function Card({ titolo, ...rest }) {
  let { children } = rest;

  if (!children) {
    return false;
  } else {
    return (
      <Box mb={3}>
        {titolo && (
          <Typography variant="h6" gutterBottom>
            {titolo}
          </Typography>
        )}

        {children}
      </Box>
    );
  }
}
