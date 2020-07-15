import React from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { Layout, LoadingApp, MessageBox, Splash } from "@minigest/ui";
import { AppDrawer } from "src/Components";
import { action } from "src/state";

// Route
import { Dashboard } from "./Dashboard";
import { Profilo } from "./Profilo";
import { Fisco } from "./Fisco";

export default function App() {
  const dispatch = useDispatch();
  let { id } = useSelector((state) => state.utente.auth);
  let { getting, getError } = useSelector((state) => state.utente.utente);

  // Scarica i dettagli dell'utente
  React.useEffect(() => {
    if (id) {
      dispatch(action.utente.get(id));
    }
  }, [id, dispatch]);

  if (getting) {
    return <LoadingApp />;
  } else {
    if (getError || id === false) {
      return (
        <Splash>
          <MessageBox variant="error">
            <Typography>{getError}</Typography>
          </MessageBox>
        </Splash>
      );
    } else {
      return (
        <Layout drawer={AppDrawer}>
          <Switch>
            {/* Dashboard */}
            <Route exact path="/" component={Dashboard} />

            {/* Profilo */}
            <Route path="/profilo" component={Profilo} />

            {/* Fisco */}
            <Route path="/fisco" component={Fisco} />
          </Switch>
        </Layout>
      );
    }
  }
}
