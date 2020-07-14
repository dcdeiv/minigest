import React from "react";
import { Typography, Link } from "@material-ui/core";
import { AppSection, AppSectionHeader, AdapterLink } from "src/Components";
import { CodeBlock } from "@minigest/ui";

export function Dipendenze() {
  return (
    <AppSection>
      <AppSectionHeader>
        <Typography variant="h4" gutterBottom>
          Dipendenze
        </Typography>
        <Typography variant="subtitle1">
          Prima di procedere è necessario installare tutte le dipendenze!
        </Typography>
      </AppSectionHeader>

      <Typography>
        Minigest farà affidamento su <b>Postgresql</b> e su <b>WeasyPrint</b> e
        funziona alla perfezione su un server linux. Se volete installare
        minigest su windows, vi consiglio di usarlo attraverso{" "}
        <Link
          to="/installazione/docker"
          color="secondary"
          component={AdapterLink}
        >
          Docker
        </Link>
        !
      </Typography>

      <CodeBlock mb={4} mt={4} caption="Ubuntu">
        {`sudo apt install \\
python3 python3-pip python3-dev \\
python3-venv python3-setuptools python3-wheel \\
python3-cffi build-essential libcairo2 \\
libpango-1.0-0 libpangocairo-1.0-0 libgdk-pixbuf2.0-0 \\
libffi-dev shared-mime-info \\
postgresql-contrib postgresql`}
      </CodeBlock>

      <Typography gutterBottom>
        In questo comando sono incluse anche tutte le dipendenze WeasyPrint, se
        volete saperne di più, visitate la{" "}
        <Link
          href="https://weasyprint.readthedocs.io/en/latest/install.html"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
        >
          documentazione WeasyPrint
        </Link>
        .
      </Typography>

      <Typography>
        Se postgresql è già installato sul server, eliminate l'ultima riga del
        comando. Tuttavia, per far funzionare i binaries di psycopg2, sarà
        comunque necessario che <code>postgresql-contrib</code> sia installato!
      </Typography>
    </AppSection>
  );
}
