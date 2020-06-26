import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Section, HeaderSection, AdapterLink } from "src/Components";

export function Introduzione(props) {
  return (
    <Section>
      <HeaderSection>
        <Typography variant="h4">Introduzione</Typography>
      </HeaderSection>

      <Typography gutterBottom>
        L'immagine docker di <b>minigest</b> contiente tutto, anche il progetto
        django, e può essere utilizzata senza perdere tempo in configurazioni!
      </Typography>
      <Typography>
        Se preferisci avere il controllo sul tuo progetto, magari per aggiungere
        funzionalità, dovresti scaricare e installare <b>minigest</b> tramite il
        pacchetto pypi. Leggi le istruzioni nella{" "}
        <Link to="/istruzioni/pypi" component={AdapterLink} color="secondary">
          sezione dedicata
        </Link>
        .
      </Typography>
    </Section>
  );
}
