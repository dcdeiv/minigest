import React from "react";
import { Table, TableCellIcon } from "@minigest/ui";
import {
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { orange, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  editButton: {
    color: orange[500],
    "&:hover": {
      color: orange[700],
    },
  },
  deleteButton: {
    color: red[500],
    "&:hover": {
      color: red[700],
    },
  },
}));

export function Lista(props) {
  let { data, onEdit, onDelete } = props;
  const classes = useStyles();

  return (
    <Paper>
      <Table box={{ p: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 150 }}>Data</TableCell>
            <TableCell>Percentuale</TableCell>
            <TableCellIcon>
              <EditIcon />
            </TableCellIcon>
            <TableCellIcon>
              <DeleteForeverIcon />
            </TableCellIcon>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((o, i) => (
            <TableRow key={i}>
              <TableCell>{o.codice}</TableCell>
              <TableCell>{o.descrizione}</TableCell>
              <TableCellIcon>
                <IconButton
                  className={classes.editButton}
                  onClick={() => onEdit(o)}
                >
                  <EditIcon />
                </IconButton>
              </TableCellIcon>
              <TableCellIcon>
                <IconButton
                  className={classes.deleteButton}
                  onClick={() => onDelete(o.id)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </TableCellIcon>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
