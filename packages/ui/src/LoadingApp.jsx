import React from "react";
import { CircularProgress } from "@material-ui/core";
import Splash from "./Splash.jsx";

export default function LoadingApp() {
  return (
    <Splash container={{ maxWidth: "xs" }}>
      <CircularProgress />
    </Splash>
  );
}
