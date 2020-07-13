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

export function Info({ dettagli: user }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Informazioni personali
        </Typography>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell variant="head" style={{ width: 100 }}>
                Nome
              </TableCell>
              <TableCell>{user.nome || "non fornito"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Cognome</TableCell>
              <TableCell>{user.cognome || "non fornito"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          modifica
        </Button>
      </CardActions>
    </Card>
  );
}
