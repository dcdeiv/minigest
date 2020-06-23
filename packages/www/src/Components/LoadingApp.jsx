import React from "react";
import { Splash } from "~/Components";
import { CircularProgress } from "@material-ui/core";

export default function LoadingApp(props) {
  return (
    <Splash container={{ maxWidth: "xs" }}>
      <CircularProgress />
    </Splash>
  );
}
