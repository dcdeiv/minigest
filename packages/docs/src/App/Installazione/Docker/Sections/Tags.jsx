import React from "react";
import { Typography, Link } from "@material-ui/core";
import { AppSection, AppSectionHeader } from "@minigest/ui";

export function Tags(props) {
  return (
    <AppSection>
      <AppSectionHeader>
        <Typography variant="h4">Tags</Typography>
      </AppSectionHeader>

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
    </AppSection>
  );
}
