import React from "react";
import { Typography, Divider } from "@material-ui/core";
import { AppHeader } from "src/Components";
import { SetUpWidget } from "src/App/Installazione";
import { Utilizzo } from "./Utilizzo";

export function Home(props) {
  return (
    <React.Fragment>
      <AppHeader mb={3}>
        <Typography variant="h1" gutterBottom>
          minigest
        </Typography>
        <Typography gutterBottom>
          Minigest è un'applicazione scritta in python per il framework django,
          completamente gratuita e distribuita con la licenza MIT.
        </Typography>
        <Typography>
          È rivolta a tutte le piccole aziende che hanno bisogno di un programma
          che permetta loro di visualizzare immediamente la loro situazione
          contabile, di tenere traccia dei pagamenti, degli acquisti, delle
          vendite e delle tasse e imposte da pagare.
        </Typography>
      </AppHeader>

      <SetUpWidget boxProps={{ mb: 3 }} />

      <Divider />

      <Utilizzo />
    </React.Fragment>
  );
}
