import React from "react";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
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
import { PwChangeDismiss } from "./PwChangeDismiss";

export function Accesso({ dettagli: user }) {
  const dispatch = useDispatch();

  // email
  const [formEmailOpen, setFormEmailOpen] = React.useState(false);
  const handleFormEmailSubmit = function (values) {
    dispatch(action.auth.put(values));
  };

  // password
  const [formPasswordOpen, setFormPasswordOpen] = React.useState(false);
  const handleFormPasswordSubmit = function (values) {
    dispatch(action.auth.pwChange(values));
  };

  // password dialog
  let { pwChangeSuccess, pwChangeError } = useSelector((state) => state.auth);
  const [
    pwChangeDialogDismissOpen,
    setPwChangeDialogDismissOpen,
  ] = React.useState(false);
  const handleDismissPwChange = () => {
    setPwChangeDialogDismissOpen(false);
    setTimeout(() => dispatch(action.auth.pwChangeDismiss()), 500);
  };

  React.useEffect(() => {
    if (!isEmpty(pwChangeSuccess) || !isEmpty(pwChangeError)) {
      setPwChangeDialogDismissOpen(true);
    }
  }, [pwChangeError, pwChangeSuccess]);

  return (
    <React.Fragment>
      <FormEmail
        user={user}
        open={formEmailOpen}
        onClose={() => setFormEmailOpen(false)}
        onSubmit={handleFormEmailSubmit}
      />

      <FormPassword
        open={formPasswordOpen}
        onClose={() => setFormPasswordOpen(false)}
        onSubmit={handleFormPasswordSubmit}
      />

      <PwChangeDismiss
        open={pwChangeDialogDismissOpen}
        response={pwChangeSuccess || pwChangeError}
        handleClose={handleDismissPwChange}
        error={!isEmpty(pwChangeError)}
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
