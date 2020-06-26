import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Section, HeaderSection } from "src/Components";

export function Descrizione(props) {
  return (
    <Section>
      <HeaderSection>
        <Typography variant="h4">Descrizione</Typography>
      </HeaderSection>

      <Typography gutterBottom>
        Il pacchetto non contiene tutto il progetto django ma solo la collezione
        delle applicazioni django che possono essere installate a seconda di
        come deve essere il vostro progetto!
      </Typography>
      <Typography gutterBottom>
        Un esempio di come può essere utilizzato <b>minigest</b> lo potete
        trovare nella cartella{" "}
        <Link
          href="https://github.com/dcdeiv/minigest/tree/master/webapp"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
        >
          webapp
        </Link>
        .
      </Typography>

      <Section mb={0} mt={4}>
        <Typography>
          <b>ATTENZIONE!</b> È importante sapere che minigest sovrascrive il
          modello django <em>User</em>, quindi va installato prima di eseguire
          la primissima migrazione dei modelli!
        </Typography>
      </Section>
    </Section>
  );
}
