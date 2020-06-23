import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { action } from "~/store";
import { LoadingApp, Layout, SplashError } from "~/Components";

// App
import { NotFound } from "./NotFound";
import { Dashboard } from "./Dashboard";
import { IvaAliquote } from "./IvaAliquote";
import { RegimeFiscale } from "./RegimeFiscale";
import { Tur } from "./Tur";
import { InteressiLegali } from "./InteressiLegali";
import { Imprese } from "./Imprese";

export default function App() {
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
        <SplashError container={{ maxWidth: "xs" }}>{getError}</SplashError>
      );
    } else {
      return (
        <Layout>
          <Switch>
            <Route exact path={path} component={Dashboard} />

            {/* TRIBUTI */}
            <Route
              path={`${path}tributi/iva/aliquote`}
              component={IvaAliquote}
            />

            {/* FISCO */}
            <Route
              path={`${path}fisco/regime-fiscale`}
              component={RegimeFiscale}
            />
            <Route
              path={`${path}fisco/interessi-legali`}
              component={InteressiLegali}
            />
            <Route
              path={`${path}fisco/tasso-ufficiale-riferimento`}
              component={Tur}
            />

            {/* IMPRESE */}
            <Route path={`${path}imprese`} component={Imprese} />

            {/* NOTFOUND */}
            <Route path={path} component={NotFound} />
          </Switch>
        </Layout>
      );
    }
  }
}
