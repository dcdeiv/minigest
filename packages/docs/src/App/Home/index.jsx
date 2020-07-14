import React from "react";
import { Typography } from "@material-ui/core";
import { AppHeader, AppContent } from "@minigest/ui";
import { SetUpWidget } from "src/App/Installazione";

export function Home() {
  return (
    <React.Fragment>
      <AppHeader>
        <Typography variant="h3" component="h1" gutterBottom>
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
      <AppContent>
        <SetUpWidget />
      </AppContent>
    </React.Fragment>
  );
}
