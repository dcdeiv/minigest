import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { AppHeader, SectionSecondary, Image } from "src/Components";

const baseImageUrl = process.env.PUBLIC_URL + "/screenshots/impresa/form";

export function IdFiscali(props) {
  return (
    <SectionSecondary>
      <AppHeader noDivider mb={2}>
        <Typography variant="h6">Identificativi Fiscali</Typography>
        <Typography variant="subtitle1">
          In questa sezione è possibile aggiungere tutti gli identificativi
          fiscali di un'impresa, per esempio il codice fiscale, la partita iva e
          così via...
        </Typography>
      </AppHeader>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <Image
            src={`${baseImageUrl}/idfiscali.png`}
            alt="Form impresa sezione identificativi fiscali"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            La <b>PARTITA I.V.A.</b> secondo le specifiche della fattura
            elettronica è composta da due campi: il primo campo riguarda il{" "}
            <b>codice paese</b> e il secondo il <b>codice della partita iva</b>.
            Quindi, se l'impresa ha sede in italia, il codice paese sarà{" "}
            <b>IT</b>. Se estera, utilizzare il codice a due cifre del paese in
            cui ha sede l'impresa o a in cui è stato assegnato il codice della
            partita iva.
          </Typography>
          <Typography gutterBottom>
            Per quanto riguarda il <b>codice della partita I.V.A.</b> è
            possibile inserire fino a 28 caratteri. Rispettare comunque le
            specifiche di ogni paese europeo. Per l'italia il massimo di
            caratteri consentiti è 11! Se l'impresa non è all'interno
            dell'Unione Europea e quindi non ha un codice partita iva, compilare
            il campo inserendo undici volte la cifra 9.
          </Typography>

          <Typography gutterBottom>
            Il <b>CODICE FISCALE</b>, così come i campi della partita iva, non è
            obbligatorio fornirlo, tuttavia, uno tra la partita iva e il codice
            fiscale, va fornito!
          </Typography>
          <Typography gutterBottom>
            Il codice fiscale spesso coincide con quello dell soggetto giuridico
            titolare dell'impresa, come nei casi di professionisti o di ditte
            individuali. Altrimenti, spesso, le società hanno come codice
            fiscale lo stesso codice assegnato alla partita IVA, ma non sempre,
            nelle società più vecchie difatti il codice fiscale differisce dal
            codice della partita iva.
          </Typography>
          <Typography>
            Come ultimo campo troviamo il <b>REGIME FISCALE</b>. Se avete
            caricato le fixtures, troverete già disponibili le selezioni!
            Selezionate il regime fiscale dell'impresa che volete aggiungere.
            (campo non obbligatorio ma consigliato se si tratta della vostra
            azienda).
          </Typography>
        </Grid>
      </Grid>
    </SectionSecondary>
  );
}
