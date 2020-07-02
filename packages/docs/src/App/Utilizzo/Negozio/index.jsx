import React from "react";
import { Typography } from "@material-ui/core";
import { AppHeader, Section, CodeBlock } from "src/Components";

// Partials
import { Sede } from "./Partials";

export default function Negozio(props) {
  return (
    <React.Fragment>
      <AppHeader mb={4}>
        <Typography variant="overline">utilizzo</Typography>
        <Typography variant="h3">Negozio</Typography>
        <Typography variant="subtitle1" gutterBottom>
          guida all'aggiunta di un negozio
        </Typography>

        <CodeBlock mt={2}>/admin/negozi/negozio/</CodeBlock>
      </AppHeader>

      <Section>
        <AppHeader mb={2} noDivider>
          <Typography variant="h4">Nuovo Negozio</Typography>

          <CodeBlock mt={2} mb={0}>
            /admin/anagrafica/negozio/add/
          </CodeBlock>
        </AppHeader>

        <Typography>
          Prima di aggiungere un negozio assicuratevi di aver aggiunto la vostra
          impresa!
        </Typography>

        <Sede />
      </Section>
    </React.Fragment>
  );
}
