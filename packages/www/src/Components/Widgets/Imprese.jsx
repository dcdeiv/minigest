import React from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import {
  Paper,
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@material-ui/core";
import { TableCellIcon } from "src/Components";
import { history } from "src/helpers";
import PageviewIcon from "@material-ui/icons/Pageview";

export function Imprese(props) {
  const { utente } = useSelector((state) => state.utente);

  if (!utente.getting && !utente.getError) {
    if (!isEmpty(utente.dettagli)) {
      const { imprese } = utente.dettagli;

      if (!isEmpty(imprese)) {
        return (
          <Paper>
            <Box p={2}>
              <Typography variant="h6" component="h6" gutterBottom>
                Le tue imprese
              </Typography>
              <Table>
                <TableBody>
                  {imprese.map((impresa, i) => {
                    return (
                      <TableRow key={i}>
                        <TableCellIcon>
                          <IconButton
                            color="primary"
                            onClick={() =>
                              history.push(`/imprese/${impresa.id}`)
                            }
                          >
                            <PageviewIcon />
                          </IconButton>
                        </TableCellIcon>
                        <TableCell>{impresa.denominazione}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Paper>
        );
      }
    }
  }

  return null;
}
