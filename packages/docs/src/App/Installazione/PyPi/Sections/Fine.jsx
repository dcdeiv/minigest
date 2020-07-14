import React from "react";
import { Typography } from "@material-ui/core";
import { CodeBlock } from "@minigest/ui";
import { AppSection, AppSectionNested, AppSectionHeader } from "src/Components";

export function Fine(props) {
  return (
    <AppSection>
      <AppSectionHeader>
        <Typography variant="h4" gutterBottom>
          Ultimi Passaggi
        </Typography>
        <Typography variant="subtitle1">
          Una volta finito di configurare il progetto, si possono eseguire le
          migrazioni, creare il <code>superuser</code> e infine utilizzare{" "}
          <b>minigest!</b>
        </Typography>
      </AppSectionHeader>

      <AppSectionNested>
        <Typography>Per prima cosa esegui le migrazioni!</Typography>

        <CodeBlock mt={2} caption="shell">
          python manage.py migrate
        </CodeBlock>
      </AppSectionNested>

      <AppSectionNested>
        <Typography>Crea il tuo utente superuser</Typography>

        <CodeBlock mt={2} caption="shell">
          python manage.py createsuperuser
        </CodeBlock>
      </AppSectionNested>

      <AppSectionNested>
        <Typography>Raccogli i file statici!</Typography>

        <CodeBlock mt={2} caption="shell">
          python manage.py collectstatic
        </CodeBlock>
      </AppSectionNested>

      <AppSectionNested>
        <Typography>Prova minigest!</Typography>

        <CodeBlock mt={2} caption="shell">
          python manage.py runserver
        </CodeBlock>
      </AppSectionNested>
    </AppSection>
  );
}
