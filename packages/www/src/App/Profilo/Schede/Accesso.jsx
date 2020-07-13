import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core";
import { Table } from "@minigest/ui";

export function Accesso({ dettagli: user }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Dati per accedere
        </Typography>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell variant="head" style={{ width: 100 }}>
                Email
              </TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Modifica email
        </Button>
        <Button variant="contained" color="secondary">
          Modifica password
        </Button>
      </CardActions>
    </Card>
  );
}
