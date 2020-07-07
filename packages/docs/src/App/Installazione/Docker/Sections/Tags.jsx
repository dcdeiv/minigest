import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Section, HeaderSection } from "src/Components";

export function Tags(props) {
  return (
    <Section>
      <HeaderSection>
        <Typography variant="h4">Tags</Typography>
      </HeaderSection>

      <Typography gutterBottom>
        Per scaricare l'immagine docker di minigest sarà necessario scegliere un
        tag disponibile tra la{" "}
        <Link
          href="https://hub.docker.com/r/ctrlmaniac/minigest/tags"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
        >
          lista dei tag pubblicati
        </Link>
        .
      </Typography>

      <Typography>
        Il tag <code>latest</code> scaricherà l'ultimo tag pubblicato!
      </Typography>
    </Section>
  );
}
