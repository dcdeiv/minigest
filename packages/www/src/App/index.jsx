import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { Layout, LoadingApp, MessageBox, Splash } from "@minigest/ui";
import { AppDrawer } from "src/Components";
import { action } from "src/state";

// External Routes
import Accedi from "./Accedi.jsx";

// Route
import { Home } from "./Home.jsx";

export { Accedi };
export function App() {
  const dispatch = useDispatch();
  let { id } = useSelector((state) => state.utente.auth);
  let { getting, getError } = useSelector((state) => state.utente.utente);
  let { path } = useRouteMatch();

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
            <Route exact path={path} component={Home} />
          </Switch>
        </Layout>
      );
    }
  }
}
