import React from "react";
import { Typography } from "@material-ui/core";
import { Section, HeaderSection, CodeBlock } from "src/Components";

export function Fine(props) {
  return (
    <Section>
      <HeaderSection>
        <Typography variant="h4" gutterBottom>
          Ultimi Passaggi
        </Typography>
        <Typography variant="subtitle1">
          Una volta finito di configurare il progetto, si possono eseguire le
          migrazioni, creare il <code>superuser</code> e infine utilizzare{" "}
          <b>minigest!</b>
        </Typography>
      </HeaderSection>

      <Section>
        <Typography>Per prima cosa esegui le migrazioni!</Typography>

        <CodeBlock mt={2} caption="shell">
          python manage.py migrate
        </CodeBlock>
      </Section>

      <Section>
        <Typography>Crea il tuo utente superuser</Typography>

        <CodeBlock mt={2} caption="shell">
          python manage.py createsuperuser
        </CodeBlock>
      </Section>

      <Section>
        <Typography>Raccogli i file statici!</Typography>

        <CodeBlock mt={2} caption="shell">
          python manage.py collectstatic
        </CodeBlock>
      </Section>

      <Section>
        <Typography>Prova minigest!</Typography>

        <CodeBlock mt={2} caption="shell">
          python manage.py runserver
        </CodeBlock>
      </Section>
    </Section>
  );
}
