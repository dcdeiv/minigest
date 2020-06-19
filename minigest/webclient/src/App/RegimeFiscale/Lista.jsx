import React from "react";
import { isEmpty } from "lodash";
import { LoadingSpinner, ListaVuota } from "~/Components";
import { makeStyles } from "@material-ui/styles";
import {
  TableContainer,
  Paper,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { orange, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  tableCellIcon: {
    width: 48,
    textAlign: "center",
  },
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
  const classes = useStyles();
  const { results, getting, getError, onEdit, onDelete } = props;

  return getting ? (
    <LoadingSpinner />
  ) : isEmpty(results) ? (
    <ListaVuota
      message={getError || `Non ci sono regimi fiscali da visualizzare`}
    />
  ) : (
    <Paper>
      {getError && (
        <Box p={2}>
          <Typography gutterBottom color="error">
            {getError}
          </Typography>
        </Box>
      )}

      <TableContainer component={Paper}>
        <Table aria-label="regime fiscale">
          <TableHead>
            <TableRow>
              <TableCell>Codice</TableCell>
              <TableCell>Descrizione</TableCell>
              <TableCell className={classes.tableCellIcon}>
                <EditIcon />
              </TableCell>
              <TableCell className={classes.tableCellIcon}>
                <DeleteForeverIcon />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {results.map((rf) => (
              <TableRow key={rf.id}>
                <TableCell>{rf.codice}</TableCell>
                <TableCell>{rf.descrizione}</TableCell>
                <TableCell className={classes.tableCellIcon}>
                  <IconButton
                    className={classes.editButton}
                    onClick={() => onEdit(rf)}
                  >
                    <EditIcon color="inherit" />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    className={classes.deleteButton}
                    onClick={() => onDelete(rf.id)}
                  >
                    <DeleteForeverIcon color="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
