import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// Paths
import Iva from "../Iva";

const TributiDir = (props) => {
  let { path } = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={path} component={Iva} />
      </Switch>
    </React.Fragment>
  );
};

export default TributiDir;
