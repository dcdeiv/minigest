import React from "react";
import { useDispatch } from "react-redux";
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
import { FormEmail, FormPassword } from "../Form";
import { action } from "src/state";

export function Accesso({ dettagli: user }) {
  const dispatch = useDispatch();

  // email
  const [formEmailOpen, setFormEmailOpen] = React.useState(false);
  const handleFormEmailSubmit = function (values) {
    dispatch(action.utente.put(values));
  };

  // password
  const [formPasswordOpen, setFormPasswordOpen] = React.useState(false);
  const handleFormPasswordSubmit = function (values) {
    console.log(values);
  };

  return (
    <React.Fragment>
      <FormEmail
        user={user}
        open={formEmailOpen}
        onClose={() => setFormEmailOpen(false)}
        onSubmit={handleFormEmailSubmit}
      />

      <FormPassword
        userId={user.id}
        open={formPasswordOpen}
        onClose={() => setFormPasswordOpen(false)}
        onSubmit={handleFormPasswordSubmit}
      />

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
          <Button
            variant="contained"
            color="primary"
            onClick={() => setFormEmailOpen(true)}
          >
            Modifica email
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setFormPasswordOpen(true)}
          >
            Modifica password
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
