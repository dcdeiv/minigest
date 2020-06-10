import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "~/helpers";
import { useSelector, useDispatch } from "react-redux";
import { action } from "~/store";

// App
import { Dashboard } from "./Dashboard";
import { NotFound } from "./NotFound";
import { Accedi } from "./Auth";
import { IvaAliquote } from "./IvaAliquote";
import { RegimeFiscale } from "./RegimeFiscale";
import { Tur } from "./Tur";
import { InteressiLegali } from "./InteressiLegali";

export default function App() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.utente.auth);

  React.useEffect(() => {
    if (id) {
      dispatch(action.utente.get(id));
    }
  }, [id, dispatch]);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/tributi/iva/aliquote" component={IvaAliquote} />

        {/* FISCO */}
        <Route path="/fisco/regime-fiscale" component={RegimeFiscale} />
        <Route path="/fisco/interessi-legali" component={InteressiLegali} />
        <Route path="/fisco/tasso-ufficiale-riferimento" component={Tur} />

        <Route exact path="/accedi/" component={Accedi} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
